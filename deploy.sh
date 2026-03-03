#!/bin/bash

# Exit on errors
set -e

TARGET_DIR=""
SKIP_BUILD=false
SKIP_DEPLOY=false
ADD_LANDING_MOD=false

# Parse arguments (order does not matter)
for arg in "$@"; do
    if [ "$arg" = "--help" ] || [ "$arg" = "-h" ]; then
        echo "Usage: $0 [options] <target_dir>"
        echo "Options:"
        echo "  --sb, --skip-build    Skip the build step"
        echo "  --sd, --skip-deploy   Skip the deploy step"
        echo "  --al, --add-landing   Deploy landing site mod after main deployment"
        exit 0
    elif [ "$arg" = "--sb" ]; then
        SKIP_BUILD=true
    elif [ "$arg" = "--sd" ]; then
        SKIP_DEPLOY=true
    elif [ "$arg" = "--al" ]; then
        ADD_LANDING_MOD=true
    else
        TARGET_DIR="$arg"
    fi
done

INDEX_FILE="./src/pages/index.js"
CONFIG_FILE="./docusaurus.config.js"
if [ "$SKIP_DEPLOY" = false ]; then
    if [ -z "$TARGET_DIR" ]; then
    echo "❌ TARGET_DIR is required"
    exit 1
    fi
    echo "✏️  Updating redirect in $INDEX_FILE"
    sed -i -E "s|return <Redirect to=['\"]/user-manual/[0-9]+\.[0-9]+/intro['\"] />;|return <Redirect to='/user-manual/$TARGET_DIR/intro' />;|g" "$INDEX_FILE"

    echo "✏️  Updating baseUrl in $CONFIG_FILE"
    sed -i "s|baseUrl:[[:space:]]*['\"][^'\"]*['\"]|baseUrl: '/user-manual/$TARGET_DIR/'|g" "$CONFIG_FILE"

    echo "✏️  Updating title in $CONFIG_FILE"
    sed -i "s|title:[[:space:]]*'APX-Gis Manual v[^']*'|title: 'APX-Gis Manual v$TARGET_DIR'|g" "$CONFIG_FILE"
fi

# Build unless --skip-build was passed
if [ "$SKIP_BUILD" = false ]; then
    echo "🔨 Building Docusaurus site..."
    npm run build
    node ./scripts/generate-search-index.js
    echo "Search index generated at static/search-index.json"
else
    echo "⏭️  Skipping build step"
fi

# Source build directory
BUILD_DIR="build"

# Remote destination
REMOTE_BASE_DIR="~/apx-manual"

# Compose remote path
if [ -z "$TARGET_DIR" ]; then
    REMOTE_PATH="$REMOTE_BASE_DIR/"
else
    REMOTE_PATH="$REMOTE_BASE_DIR/$TARGET_DIR/"
fi


if [ "$SKIP_DEPLOY" = true ]; then
    echo "⏭️  Skipping deploy step"
    npm run serve
    exit 0
    else
    echo "📁 Copying build/ to newapx"
    # Run scp
    scp -r "$BUILD_DIR"/* "newapx:$REMOTE_PATH"

    echo "✅ Deployment complete!"
fi


if [ "$ADD_LANDING_MOD" = true ]; then
    echo "🔨 Deploying landing site mod..."
    git checkout landing-site
    echo "✏️  Updating href tag"
    sed -i -E "s|return <li><a href=\"/user-manual/[0-9.]+/\">Version [0-9.]+</a></li>;|return <Redirect to='/user-manual/$TARGET_DIR/intro' />;|g" "$INDEX_FILE"
    ./deploy-landing.sh
else
    echo "⏭️  Skipping landing site mod deployment"
fi




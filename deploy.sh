#!/bin/bash

# Exit on errors
set -e

TARGET_DIR=""
SKIP_BUILD=false
ADD_LANDING_MOD=false

# Parse arguments (order does not matter)
for arg in "$@"; do
    if [ "$arg" = "--sb" ]; then
        SKIP_BUILD=true
    elif [ "$arg" = "--al" ]; then
        ADD_LANDING_MOD=true
    else
        TARGET_DIR="$arg"
    fi
done

if [ -z "$TARGET_DIR" ]; then
    echo "❌ TARGET_DIR is required"
    exit 1
fi

INDEX_FILE="./src/pages/index.js"
CONFIG_FILE="./docusaurus.config.js"

echo "✏️  Updating redirect in $INDEX_FILE"
sed -i -E "s|return <Redirect to=['\"]/user-manual/[0-9]+\.[0-9]+/intro['\"] />;|return <Redirect to='/user-manual/$TARGET_DIR/intro' />;|g" "$INDEX_FILE"

echo "✏️  Updating baseUrl in $CONFIG_FILE"
sed -i "s|baseUrl:[[:space:]]*['\"][^'\"]*['\"]|baseUrl: '/user-manual/$TARGET_DIR/'|g" "$CONFIG_FILE"

echo "✏️  Updating title in $CONFIG_FILE"
sed -i "s|title:[[:space:]]*'APX-Gis Manual v[^']*'|title: 'APX-Gis Manual v$TARGET_DIR'|g" "$CONFIG_FILE"

# Build unless --skip-build was passed
if [ "$SKIP_BUILD" = false ]; then
    echo "🔨 Building Docusaurus site..."
    npm run build
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

echo "📁 Copying build/ to newapx"

# Run scp
scp -r "$BUILD_DIR"/* "newapx:$REMOTE_PATH"

echo "✅ Deployment complete!"

if [ "$ADD_LANDING_MOD" = true ]; then
    echo "🔨 Deploying landing site mod..."
    git checkout landing-site
    echo "✏️  Updating href tag"
    sed -i -E "s|return <li><a href=\"/user-manual/5.6/\">Version 5.6</a></li>;|return <Redirect to='/user-manual/$TARGET_DIR/intro' />;|g" "$INDEX_FILE"
    ./deploy-landing.sh
else
    echo "⏭️  Skipping landing site mod deployment"
fi




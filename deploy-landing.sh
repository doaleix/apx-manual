#!/bin/bash

# Exit on errors
set -e

TARGET_DIR=""
# Build
npm run build
# Source build directory
BUILD_DIR="build"

# Remote destination
REMOTE_PATH="~/apx-manual"

echo "📁 Copying build/ to newapx"

# Run scp
scp -r "$BUILD_DIR"/* "newapx:$REMOTE_PATH"

echo "✅ Deployment complete!"

#!/bin/bash

# CONFIG
PROJECT_PATH="/home/blog"
CADDY_WEBROOT="/var/www/html"

echo "🚀 Deploying Astro: $(date)"

# Build
echo "🔨 Building..."
cd "$PROJECT_PATH" || exit 1
/root/.bun/bin/bun run build
if [ $? -ne 0 ]; then echo "❌ Build failed"; exit 1; fi

DIST_PATH="$PROJECT_PATH/dist"
if [ ! -d "$DIST_PATH" ]; then echo "❌ $DIST_PATH missing"; exit 1; fi

# Copy to Caddy
echo "📤 Copying..."
rm -rf "${CADDY_WEBROOT:?}"/*
cp -rf "$DIST_PATH"/* "$CADDY_WEBROOT/"

# Fix permissions (Caddy runs as caddy, not www-data)
echo "🔒 Permissions..."
chown -R www-data:www-data "$CADDY_WEBROOT"
chmod -R 755 "$CADDY_WEBROOT"

# Reload Caddy
echo "🔄 Reloading..."
systemctl reload caddy

# Test
if curl -s -f -o /dev/null https://robertsoare.xyz; then
    echo "✅ LIVE: https://robertsoare.xyz"
else
    echo "❌ Test failed"
    exit 1
fi

echo "🎉 Done!"

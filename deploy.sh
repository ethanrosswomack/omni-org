#!/bin/bash

# Deployment script for production build

echo "🚀 Starting deployment build..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Built files are in the 'dist' folder:"
    echo "   - dist/public/ (frontend)"
    echo "   - dist/index.js (backend)"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Test locally: npm start"
    echo "   2. Deploy dist/ folder to your server"
    echo "   3. Run 'npm install --production' on server"
    echo "   4. Start with 'npm start' or 'pm2 start dist/index.js'"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

# Quick Start Deployment Guide

## 🎯 Fastest Way to Deploy

### For Local/VPS Server:

```bash
# 1. Build the app
npm run build

# 2. Test it locally
npm start

# 3. Transfer to your server
# Copy: dist/, package.json, package-lock.json
```

### Using Docker (Easiest):

```bash
# 1. Build the app first
npm run build

# 2. Build and run with Docker
docker-compose up -d
```

Your app will be running on `http://localhost:5000`

## 📋 What You Need on Your Server

- Node.js 20.x or higher
- The `dist/` folder (created after `npm run build`)
- `package.json` and `package-lock.json`

## 🔥 One-Command Deploy Script

Use the included deployment script:

```bash
./deploy.sh
```

This will:
1. Clean previous builds
2. Install dependencies
3. Build everything
4. Show you next steps

## 🌐 For Different Platforms

- **Your Own Server**: See Option 1 in DEPLOYMENT.md
- **Docker**: See Option 2 in DEPLOYMENT.md
- **Railway/Render**: See Option 3 in DEPLOYMENT.md
- **Vercel**: See Option 3 in DEPLOYMENT.md

## ⚡ Common Commands

```bash
# Development
npm run dev          # Run in development mode

# Production
npm run build        # Build for production
npm start            # Start production server

# With PM2 (recommended for production)
pm2 start dist/index.js --name myapp
pm2 save
```

## 📁 Files Created for Deployment

- `DEPLOYMENT.md` - Complete deployment guide
- `Dockerfile` - For Docker deployment
- `docker-compose.yml` - For Docker Compose
- `vercel.json` - For Vercel deployment
- `deploy.sh` - Automated build script
- `.dockerignore` - Docker ignore rules

## 🎉 You're Ready!

Choose your deployment method from DEPLOYMENT.md and follow the instructions.

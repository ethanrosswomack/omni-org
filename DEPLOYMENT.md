# Deployment Guide

This application is a full-stack Node.js application with Express backend and React frontend. Below are instructions for deploying it on various platforms.

## 🏗️ Building the Application

### Prerequisites
- Node.js 20.x or higher
- npm

### Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

   This command:
   - Builds the React frontend (using Vite) → `dist/public/`
   - Bundles the Express backend (using esbuild) → `dist/index.js`

3. **Test the production build locally:**
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:5000`

## 📦 What Gets Deployed

After building, you need to deploy these files:
- `dist/` folder (contains both backend and frontend)
- `node_modules/` folder (or run `npm install --production` on server)
- `package.json` and `package-lock.json`

## 🚀 Deployment Options

### Option 1: VPS or Dedicated Server (Recommended)

Perfect for platforms like DigitalOcean, Linode, AWS EC2, etc.

1. **Transfer files to your server:**
   ```bash
   # Using SCP
   scp -r dist/ package.json package-lock.json user@your-server:/var/www/myapp/
   ```

2. **On your server:**
   ```bash
   cd /var/www/myapp
   npm install --production
   npm start
   ```

3. **Run with PM2 (recommended for production):**
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start the app
   pm2 start dist/index.js --name "myapp"
   
   # Save PM2 configuration
   pm2 save
   
   # Setup PM2 to start on boot
   pm2 startup
   ```

4. **Setup Nginx as reverse proxy** (optional but recommended):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 2: Docker Deployment

A `Dockerfile` and `docker-compose.yml` are provided for containerized deployment.

```bash
# Build and run
docker-compose up -d
```

### Option 3: Platform-as-a-Service (PaaS)

#### Railway / Render / Fly.io
These platforms support Node.js apps out of the box:

1. Connect your git repository
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Deploy!

#### Vercel
Vercel supports Node.js backends:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

Note: You may need to add a `vercel.json` configuration file (provided in this package).

### Option 4: Local Network Hosting

To run on your local machine or home server:

1. Build the app: `npm run build`
2. Start it: `npm start`
3. Access it at `http://localhost:5000`
4. For external access, configure port forwarding on your router

## 🔧 Environment Variables

Currently, the app uses in-memory storage (data is lost on restart). If you want to use a database:

- Set `DATABASE_URL` to your PostgreSQL connection string
- Modify `server/storage.ts` to use `DatabaseStorage` instead of `MemStorage`

## 📝 Important Notes

1. **Port Configuration**: The app runs on port 5000 by default. You can change this in `server/index.ts` if needed.

2. **Data Persistence**: Currently using in-memory storage. Consider switching to a database for production.

3. **HTTPS**: For production, always use HTTPS. Use Nginx with Let's Encrypt or your platform's SSL certificate.

4. **Performance**: Consider using a CDN for static assets in production.

## ⚠️ Why Not Cloudflare Pages?

Cloudflare Pages is designed for static sites only. This app has a backend server that needs to run continuously. However, you could:

- Deploy the frontend to Cloudflare Pages
- Deploy the backend to Cloudflare Workers (requires significant refactoring)
- Or use Cloudflare Pages Functions (limited to serverless functions)

For simpler deployment, use one of the other options listed above.

## 🆘 Troubleshooting

**App won't start:**
- Check if port 5000 is already in use
- Ensure Node.js version is 20.x or higher
- Verify all dependencies are installed

**Database errors:**
- If you see DATABASE_URL errors but want to use in-memory storage, ensure `server/storage.ts` uses `MemStorage`

**Build fails:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear dist: `rm -rf dist`
- Try building again: `npm run build`

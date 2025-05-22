# Final Deployment Instructions for OmniversalMedia.org

## Step 1: Download the Project Files

1. Download the entire project from this Replit environment
2. Extract the files to your local development environment

## Step 2: Build the Production Version

Run these commands in your local terminal after navigating to the project directory:

```bash
# Install dependencies
npm install

# Build the production version
npm run build
```

This will create a `/dist` directory with the production-ready files.

## Step 3: Transfer Files to Your AetherCore Server

Use an SFTP client (like FileZilla) or the command line to transfer the contents of the `/dist` directory to your server at 73.113.207.3:

```bash
# Using scp
scp -r ./dist/* username@73.113.207.3:/var/www/omniversalmedia.org/
```

## Step 4: Configure Nginx on Your Server

1. Connect to your server via SSH:
   ```bash
   ssh username@73.113.207.3
   ```

2. Create or update the Nginx configuration for your domain:
   ```bash
   sudo nano /etc/nginx/sites-available/omniversalmedia.org
   ```

3. Use the configuration template from the deployment-steps.md file

4. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/omniversalmedia.org /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## Step 5: Set Up SSL Certificate

```bash
sudo certbot --nginx -d omniversalmedia.org -d www.omniversalmedia.org
```

## Step 6: Verify Your Deployment

1. Visit https://omniversalmedia.org in your browser
2. Test all pages and features:
   - Home page sections
   - About Us page
   - Network Map visualization
   - Dossier page
   - Contact form
   - Links to your other websites

## Support Resources

If you need help with the server configuration, refer to:
- Nginx documentation: https://nginx.org/en/docs/
- Let's Encrypt documentation: https://letsencrypt.org/docs/

## Regular Maintenance

1. Set up automated backups for your website files
2. Configure automatic SSL certificate renewal
3. Keep your dependencies updated for security patches
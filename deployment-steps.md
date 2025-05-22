# Deployment Steps for OmniversalMedia.org

## Building the Project for Production

1. Build the project using the following command:
```bash
npm run build
```

This will create a production-ready build in the `/dist` directory with all optimized assets.

## Server Configuration (AetherCore Server @ 73.113.207.3)

### 1. File Transfer

Transfer the contents of the `/dist` directory to your AetherCore Server at the web root path (typically `/var/www/omniversalmedia.org`):

```bash
# Using scp (secure copy)
scp -r ./dist/* username@73.113.207.3:/var/www/omniversalmedia.org/

# Alternatively, using rsync for more efficient transfers
rsync -avz --delete ./dist/ username@73.113.207.3:/var/www/omniversalmedia.org/
```

### 2. Nginx Configuration

Create/update the Nginx configuration file for omniversalmedia.org on your server:

```bash
sudo nano /etc/nginx/sites-available/omniversalmedia.org
```

Use this configuration template:

```nginx
server {
    listen 80;
    server_name omniversalmedia.org www.omniversalmedia.org;

    # Redirect HTTP to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name omniversalmedia.org www.omniversalmedia.org;

    # SSL configuration
    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;

    # Root directory and index file
    root /var/www/omniversalmedia.org;
    index index.html;

    # For SPA routing - always serve index.html for any unmatched routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/javascript application/json;
    gzip_min_length 1000;
}
```

### 3. Enable and Restart Nginx

```bash
# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/omniversalmedia.org /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 4. SSL Certificate Setup

If you don't already have SSL certificates, obtain them using Let's Encrypt:

```bash
sudo certbot --nginx -d omniversalmedia.org -d www.omniversalmedia.org
```

This will automatically configure your Nginx settings for SSL.

## Domain Configuration

Ensure your domain's DNS settings point to your server's IP address (73.113.207.3):

1. A record for `omniversalmedia.org` → 73.113.207.3
2. A record for `www.omniversalmedia.org` → 73.113.207.3

## Post-Deployment Testing

After deployment, verify that everything works correctly:

1. Visit https://omniversalmedia.org in different browsers
2. Test all site navigation
3. Verify the Network Map visualization works properly
4. Test the contact form submission
5. Check all external links to your other properties

## Maintenance

1. Set up regular backups of your website files
2. Configure regular SSL certificate renewal:
```bash
sudo certbot renew --dry-run
```

## Troubleshooting

If you encounter issues:

1. Check Nginx error logs: 
```bash
sudo tail -f /var/log/nginx/error.log
```

2. Verify file permissions:
```bash
sudo chown -R www-data:www-data /var/www/omniversalmedia.org
sudo chmod -R 755 /var/www/omniversalmedia.org
```
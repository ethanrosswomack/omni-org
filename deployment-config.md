# Deployment Configuration for OmniversalMedia.org

## Server Information
- **Server IP Address**: 73.113.207.3
- **Domain**: omniversalmedia.org
- **Web Server**: Nginx 
- **Node.js Version**: 16.x or higher recommended

## Deployment Steps

### 1. Build the Project for Production
```bash
npm run build
```
This will create a production-ready build in the `/dist` directory.

### 2. Transfer Files to Server
Transfer the contents of the `/dist` directory to your server's web root (typically `/var/www/omniversalmedia.org` or similar).

### 3. Nginx Configuration
Create/update the Nginx configuration for omniversalmedia.org:

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

    # For Single Page Application routing
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

### 4. Restart Nginx
```bash
sudo systemctl restart nginx
```

### 5. Set Up SSL Certificate
If you don't already have SSL certificates, you can obtain them for free using Let's Encrypt:

```bash
sudo certbot --nginx -d omniversalmedia.org -d www.omniversalmedia.org
```

### 6. Additional Security Considerations
- Enable a firewall (e.g., UFW) allowing only ports 80, 443, and SSH
- Set up regular backups of your website files
- Consider implementing rate limiting to prevent abuse

### 7. Testing
After deployment, thoroughly test all features:
- Navigation between pages
- Contact form functionality
- Network Map visualization 
- Mobile responsiveness
- Links to external sites (BeneathTheSurface.net, Reincarnated.Store, etc.)
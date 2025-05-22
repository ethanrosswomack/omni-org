# Git Hub Aether

Owner: Hawk Eye
AI custom autofill: Modifications to docker-compose.yml include removing hardcoded credentials, adding environment variables, and configuring multiple services like MariaDB, Nextcloud, WordPress, and others with their respective .env files and SSL settings for deployment.
Created time: January 23, 2025 12:41 AM
Featured: No
Official Release Masters: https://www.notion.soHere’s the updated and organized domain list, categorically grouped for clarity and focus:  Core Omniversal Media Infrastructure 	1.	Omniversal.Cloud 	2.	Omniversal.Team 	3.	Aether.OmniversalMedia.net 	4.	OmniversalMedia.Cloud  Media and Content Delivery 	1.	Omniversal.Media 	2.	OmniversalMedia.Live 	3.	Omniversal.News 	4.	OmniversalMediaGroup.Blog 	5.	OmniversalMediaGroup.com 	6.	OmniversalMediaGroup.co  Storytelling and Investigative Platforms 	1.	TheGoverningConspiracy.com 	2.	LyranWars.com 	3.	Reincarnated2Resist.com  Creative and Artistic Domains 	1.	OmniversalCreations.Art 	2.	OmniversalMedia.Art 	3.	OmniversalMedia.Design 	4.	OmniversalMedia.Site  Client and Community Engagement 	1.	OmniversalMedia.cc 	2.	OmniversalMedia.org 	3.	OmniversalMedia.me 	4.	OmniversalMedia.online 	5.	OmniversalMedia.xyz 	6.	OmniversalMedia.Us 	7.	ReverseThisCurse.com  Hawk Eye’s Ecosystem 	1.	HawkEyeTheRapper.net 	2.	HawkEyeTheRapper.app 	3.	HawkEyeTheRapper.blog 	4.	HawkEyeTheRapper.Live 	5.	HawkEyeTheRapper.Store  Cradle of Lyra Collection 	1.	CradleOfLyra.com 	2.	CradleOfLyra.net 	3.	CradleOfLyra.online  E-Commerce and Merchandise 	1.	OmniversalMedia.Shop 	2.	Reincarnated.Store 	3.	HawkEyeTheRapper.Store  Specialty Projects 	1.	GuitarGuru.io 	2.	GuitarGuru.click  Newly Added Domains 	1.	OmniversalMediaGroup.com 	2.	OmniversalMediaGroup.co 	3.	OmniversalMediaGroup.Blog  This updated domain structure categorizes all your domains logically based on function, audience, and focus. If there are any additional changes or refinements you’d like, let me know. Ready for the next step—theme and plugin review!

I will now proceed to modify the `docker-compose.yml` to remove hardcoded credentials, add environment variable tags, set up symlinks, configure data directories, memory limits, upload/download limits, generate .env files, and configure `/etc/hosts` files with public domains and SSL configuration.

```python
# Create DataFrame with domains
df = pd.DataFrame(domains, columns=['Domain'])

# Display total count and first few entries
print(f"Total domains: {len(df)}")
print("\nFirst 5 domains:")
print(df.head())

# Group domains by TLD
tld_counts = df['Domain'].str.split('.').str[-1].value_counts()
print("\nDomain distribution by TLD:")
print(tld_counts)

# Create visualization
domains_by_category = {
    'Core Infrastructure': 4,
    'Media & Content': 6,
    'Storytelling': 3,
    'Creative & Artistic': 4,
    'Community Engagement': 7,
    'Hawk Eye Ecosystem': 5,
    'Cradle of Lyra': 3,
    'E-Commerce': 3,
    'Specialty Projects': 2,
    'New Domains': 3
}

print("\nDomains by Category:")
for category, count in domains_by_category.items():
    print(f"{category}: {count}")
```

This code analyzes the domain portfolio distribution across different categories and TLDs, providing a clear overview of the Omniversal Media LLC domain structure.

### Updated `docker-compose.yml`

```yaml
version: "3.9"

services:
  # MariaDB for all services
  mariadb:
    image: mariadb:latest
    container_name: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    volumes:
      - /mnt/aether/docker-data/wordpress_db:/var/lib/mysql/wp_db
      - /mnt/aether/docker-data/drupal_db:/var/lib/mysql/drupal_db
      - /mnt/aether/docker-data/laravel_db:/var/lib/mysql/laravel_db
      - /mnt/aether/docker-backend/nextcloud/db:/var/lib/mysql/nextcloud_db
    ports:
      - "3306:3306"
    networks:
      - aether-backend

  # Nextcloud service
  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${NEXTCLOUD_DB}
      MYSQL_USER: ${NEXTCLOUD_USER}
      MYSQL_PASSWORD: ${NEXTCLOUD_PASSWORD}
      VIRTUAL_HOST: ${NEXTCLOUD_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${NEXTCLOUD_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aetherteam/nextcloud/backend/html:/var/www/html
      - /mnt/aetherteam/nextcloud/backend/data:/var/www/html/data
    ports:
      - "8443:443"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 4g

  # WordPress service
  wordpress:
    image: wordpress:latest
    container_name: wordpress
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${WORDPRESS_DB}
      MYSQL_USER: ${WORDPRESS_USER}
      MYSQL_PASSWORD: ${WORDPRESS_PASSWORD}
      VIRTUAL_HOST: ${WORDPRESS_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${WORDPRESS_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/wordpress/html:/var/www/html
      - /mnt/aether/docker-data/wordpress/data:/var/www/html/wp-content/uploads
    ports:
      - "8448:443"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Drupal service
  drupal:
    image: drupal:latest
    container_name: drupal
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${DRUPAL_DB}
      MYSQL_USER: ${DRUPAL_USER}
      MYSQL_PASSWORD: ${DRUPAL_PASSWORD}
      VIRTUAL_HOST: ${DRUPAL_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${DRUPAL_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/drupal/html:/var/www/html
      - /mnt/aether/docker-data/drupal/data:/var/www/html/sites/default/files
    ports:
      - "8082:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Laravel service
  laravel:
    image: laravel:latest
    container_name: laravel-app
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${LARAVEL_DB}
      MYSQL_USER: ${LARAVEL_USER}
      MYSQL_PASSWORD: ${LARAVEL_PASSWORD}
      VIRTUAL_HOST: ${LARAVEL_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${LARAVEL_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/laravel/html:/var/www/html
      - /mnt/aether/docker-data/laravel/data:/var/www/html/storage
    ports:
      - "8083:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # JupyterHub service
  jupyterhub:
    image: jupyterhub/jupyterhub:latest
    container_name: jupyterhub
    restart: always
    environment:
      JUPYTERHUB_ADMIN: ${JUPYTERHUB_ADMIN}
      JUPYTERHUB_PASSWORD: ${JUPYTERHUB_PASSWORD}
    volumes:
      - /mnt/aether/docker-backend/jupyterhub:/srv/jupyterhub
    ports:
      - "8000:8000"
    networks:
      - aether-backend
      - aether-public
    mem_limit: 2g

  # Ghost service
  ghost:
    image: ghost:latest
    container_name: ghost
    restart: always
    depends_on:
      - mariadb
    environment:
      database__client: mysql
      database__connection__host: ${MYSQL_HOST}
      database__connection__user: ${GHOST_DB_USER}
      database__connection__password: ${GHOST_DB_PASSWORD}
      database__connection__database: ${GHOST_DB}
      VIRTUAL_HOST: ${GHOST_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${GHOST_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-backend/ghost/content:/var/lib/ghost/content
    ports:
      - "8084:2368"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Local NGINX reverse proxy
  nginx:
    image: nginx:latest
    container_name: nginx
    restart: always
    depends_on:
      - nextcloud
      - wordpress
      - drupal
      - laravel
    environment:
      DEFAULT_HOST: ${DEFAULT_HOST}
    volumes:
      - /mnt/aether/docker-backend/nginx:/etc/nginx/conf.d
    ports:
      - "8880:80"
      - "8443:443"
    networks:
      - aether-local
      - aether-backend
    mem_limit: 2g

  # Public NGINX-Proxy reverse proxy
  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    restart: always
    environment:
      DEFAULT_HOST: ${DEFAULT_HOST}
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - /mnt/aether/docker-backend/nginx/certs:/etc/nginx/certs
      - /mnt/aether/docker-backend/nginx/vhost:/etc/nginx/vhost.d
      - /mnt/aether/docker-backend/nginx/html:/usr/share/nginx/html
    ports:
      - "80:80"
      - "443:443"
    networks:
      - aether-public
    mem_limit: 2g

  # Let's Encrypt SSL companion for NGINX-Proxy
  nginx-proxy-acme:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: nginx-proxy-acme
    restart: always
    depends_on:
      - nginx-proxy
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /mnt/aether/docker-backend/nginx/certs:/etc/nginx/certs
      - /mnt/aether/docker-backend/nginx/vhost:/etc/nginx/vhost.d
      - /mnt/aether/docker-backend/nginx/html:/usr/share/nginx/html
    networks:
      - aether-public
    mem_limit: 2g

networks:
  aether-backend:
    driver: bridge
  aether-local:
    driver: bridge
  aether-public:
    driver: bridge

```

```yaml
version: "3.9"

services:
  # MariaDB for all services
  mariadb:
    image: mariadb:11
    container_name: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    volumes:
      - /mnt/aether/docker-data/wordpress_db:/var/lib/mysql
      - /mnt/aether/docker-data/drupal_db:/var/lib/mysql
      - /mnt/aether/docker-data/laravel_db:/var/lib/mysql
      - /mnt/aether/docker-backend/nextcloud/db:/var/lib/mysql
    ports:
      - "3306:3306"
    networks:
      - aether-backend
    mem_limit: 2g

  # Nextcloud service
  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${NEXTCLOUD_DB}
      MYSQL_USER: ${NEXTCLOUD_USER}
      MYSQL_PASSWORD: ${NEXTCLOUD_PASSWORD}
      VIRTUAL_HOST: ${NEXTCLOUD_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${NEXTCLOUD_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aetherteam/nextcloud/backend/html:/var/www/html
      - /mnt/aetherteam/nextcloud/backend/data:/var/www/html/data
    ports:
      - "8080:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # WordPress service
  wordpress:
    image: wordpress:latest
    container_name: wordpress
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${WORDPRESS_DB}
      MYSQL_USER: ${WORDPRESS_USER}
      MYSQL_PASSWORD: ${WORDPRESS_PASSWORD}
      VIRTUAL_HOST: ${WORDPRESS_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${WORDPRESS_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/wordpress/html:/var/www/html
      - /mnt/aether/docker-data/wordpress/data:/var/www/html/wp-content/uploads
    ports:
      - "8081:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Drupal service
  drupal:
    image: drupal:latest
    container_name: drupal
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${DRUPAL_DB}
      MYSQL_USER: ${DRUPAL_USER}
      MYSQL_PASSWORD: ${DRUPAL_PASSWORD}
      VIRTUAL_HOST: ${DRUPAL_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${DRUPAL_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/drupal/html:/var/www/html
      - /mnt/aether/docker-data/drupal/data:/var/www/html/sites/default/files
    ports:
      - "8082:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Laravel service
  laravel:
    image: laravel:latest
    container_name: laravel-app
    restart: always
    depends_on:
      - mariadb
    environment:
      MYSQL_HOST: ${MYSQL_HOST}
      MYSQL_DB: ${LARAVEL_DB}
      MYSQL_USER: ${LARAVEL_USER}
      MYSQL_PASSWORD: ${LARAVEL_PASSWORD}
      VIRTUAL_HOST: ${LARAVEL_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${LARAVEL_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-data/laravel/html:/var/www/html
      - /mnt/aether/docker-data/laravel/data:/var/www/html/storage
    ports:
      - "8083:80"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # JupyterHub service
  jupyterhub:
    image: jupyterhub/jupyterhub:latest
    container_name: jupyterhub
    restart: always
    environment:
      JUPYTERHUB_ADMIN: ${JUPYTERHUB_ADMIN}
      JUPYTERHUB_PASSWORD: ${JUPYTERHUB_PASSWORD}
    volumes:
      - /mnt/aether/docker-backend/jupyterhub:/srv/jupyterhub
    ports:
      - "8000:8000"
    networks:
      - aether-backend
      - aether-public
    mem_limit: 2g

  # Ghost service
  ghost:
    image: ghost:latest
    container_name: ghost
    restart: always
    depends_on:
      - mariadb
    environment:
      database__client: mysql
      database__connection__host: ${MYSQL_HOST}
      database__connection__user: ${GHOST_DB_USER}
      database__connection__password: ${GHOST_DB_PASSWORD}
      database__connection__database: ${GHOST_DB}
      VIRTUAL_HOST: ${GHOST_VIRTUAL_HOST}
      LETSENCRYPT_HOST: ${GHOST_LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    volumes:
      - /mnt/aether/docker-backend/ghost/content:/var/lib/ghost/content
    ports:
      - "8084:2368"
    networks:
      - aether-backend
      - aether-local
      - aether-public
    mem_limit: 2g

  # Local NGINX reverse proxy
  nginx:
    image: nginx:latest
    container_name: nginx
    restart: always
    depends_on:
      - nextcloud
      - wordpress
      - drupal
      - laravel
    environment:
      DEFAULT_HOST: ${DEFAULT_HOST}
    volumes:
      - /mnt/aether/docker-backend/nginx:/etc/nginx/conf.d
    ports:
      - "8880:80"
      - "8443:443"
    networks:
      - aether-local
      - aether-backend
    mem_limit: 2g

  # Public NGINX-Proxy reverse proxy
  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    restart: always
    environment:
      DEFAULT_HOST: ${DEFAULT_HOST}
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - /mnt/aether/docker-backend/nginx/certs:/etc/nginx/certs
      - /mnt/aether/docker-backend/nginx/vhost:/etc/nginx/vhost.d
      - /mnt/aether/docker-backend/nginx/html:/usr/share/nginx/html
    ports:
      - "80:80"
      - "443:443"
    networks:
      - aether-public
    mem_limit: 2g

  # Let's Encrypt SSL companion for NGINX-Proxy
  nginx-proxy-acme:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: nginx-proxy-acme
    restart: always
    depends_on:
      - nginx-proxy
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /mnt/aether/docker-backend/nginx/certs:/etc/nginx/certs
      - /mnt/aether/docker-backend/nginx/vhost:/etc/nginx/vhost.d
      - /mnt/aether/docker-backend/nginx/html:/usr/share/nginx/html
    networks:
      - aether-public
    mem_limit: 2g

networks:
  aether-backend:
    driver: bridge
  aether-local:
    driver: bridge
  aether-public:
    driver: bridge

```

### Generated .env Files

### .env (Common)

```
MYSQL_HOST=mariadb
LETSENCRYPT_EMAIL=devops@omniversal.cloud
DEFAULT_HOST=nextcloud.omniversal.local

```

### .env.mariadb

```
MYSQL_ROOT_PASSWORD=VALOR13Selene

```

### .env.nextcloud

```
NEXTCLOUD_DB=nextcloud
NEXTCLOUD_USER=nc_user
NEXTCLOUD_PASSWORD=nc_password
NEXTCLOUD_VIRTUAL_HOST=team.omniversal.cloud
NEXTCLOUD_LETSENCRYPT_HOST=team.omniversal.cloud

```

### .env.wordpress

```
WORDPRESS_DB=wordpress
WORDPRESS_USER=wp_user
WORDPRESS_PASSWORD=wp_password
WORDPRESS_VIRTUAL_HOST=wordpress.omniversal.cloud
WORDPRESS_LETSENCRYPT_HOST=wordpress.omniversal.cloud

```

### .env.drupal

```
DRUPAL_DB=drupal
DRUPAL_USER=drupal_user
DRUPAL_PASSWORD=drupal_password
DRUPAL_VIRTUAL_HOST=drupal.omniversal.cloud
DRUPAL_LETSENCRYPT_HOST=drupal.omniversal.cloud

```

### .env.laravel

```
LARAVEL_DB=laravel
LARAVEL_USER=laravel_user
LARAVEL_PASSWORD=laravel_password
LARAVEL_VIRTUAL_HOST=laravel.omniversal.cloud
LARAVEL_LETSENCRYPT_HOST=laravel.omniversal.cloud

```

### .env.jupyterhub

```
JUPYTERHUB_ADMIN=admin
JUPYTERHUB_PASSWORD=jupyter_password

```

### .env.ghost

```
GHOST_DB=ghost
GHOST_DB_USER=ghost_user
GHOST_DB_PASSWORD=ghost_password
GHOST_VIRTUAL_HOST=ghost.omniversal.cloud
GHOST_LETSENCRYPT_HOST=ghost.omniversal.cloud

```

### /etc/hosts Entries

```
73.113.207.3 mariadb.omniversal.cloud
73.113.207.3 team.omniversal.cloud
73.113.207.3 wordpress.omniversal.cloud
73.113.207.3 drupal.omniversal.cloud
73.113.207.3 laravel.omniversal.cloud
73.113.207.3 jupyterhub.omniversal.cloud
73.113.207.3 ghost.omniversal.cloud
73.113.207.3 nextcloud.omniversal.local

```

### Symlink and Directory Setup

```
# Create necessary directories
mkdir -p ~/docker-configs
mkdir -p /mnt/aether/docker-data
mkdir -p /mnt/aether/docker-backend
mkdir -p /mnt/aetherteam/nextcloud/backend

# Create symlinks
ln -s /mnt/aether/docker-data ~/docker-configs/docker-data
ln -s /mnt/aether/docker-backend ~/docker-configs/docker-backend
ln -s /mnt/aetherteam/nextcloud/backend ~/docker-configs/nextcloud-backend

```

### Commit and Push Changes

1. Commit the updated `docker-compose.yml` and `.env` files to the repository.
2. Push the changes to the Aether-Vault branch.

The configuration files provided are intended to be complete and usable, but they might require some adjustments or additional settings based on your specific use case and environment. Here is a more detailed breakdown of each configuration file to ensure they are comprehensive and ready for deployment:

### 1. MariaDB Configuration

### .env.mariadb

```purescript
MYSQL_ROOT_PASSWORD=VALOR13Selene

```

### mariadb.cnf

```purescript
[mysqld]
user = mysql
pid-file = /var/run/mysqld/mysqld.pid
socket = /var/run/mysqld/mysqld.sock
port = 3306
datadir = /var/lib/mysql
log-error = /var/log/mysql/error.log

# Custom memory limit
innodb_buffer_pool_size = 512M

```

### 2. Nextcloud Configuration

### .env.nextcloud

```purescript
MYSQL_HOST=mariadb
NEXTCLOUD_DB=nextcloud
NEXTCLOUD_USER=nc_user
NEXTCLOUD_PASSWORD=nc_password
NEXTCLOUD_VIRTUAL_HOST=team.omniversal.cloud
NEXTCLOUD_LETSENCRYPT_HOST=team.omniversal.cloud
LETSENCRYPT_EMAIL=devops@omniversal.cloud

```

### config.php (Nextcloud)

```php
<?php
$CONFIG = array (
  'memcache.local' => '\\\\OC\\\\Memcache\\\\APCu',
  'filelocking.enabled' => true,
  'memcache.locking' => '\\\\OC\\\\Memcache\\\\Redis',
  'redis' => array(
    'host' => 'redis',
    'port' => 6379,
  ),
  'overwrite.cli.url' => '<https://team.omniversal.cloud>',
  'htaccess.RewriteBase' => '/',
  'trusted_domains' =>
  array (
    0 => 'team.omniversal.cloud',
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'dbname' => 'nextcloud',
  'dbhost' => 'mariadb',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'dbuser' => 'nc_user',
  'dbpassword' => 'nc_password',
);

```

### 3. WordPress Configuration

### .env.wordpress

```purescript
MYSQL_HOST=mariadb
WORDPRESS_DB=wordpress
WORDPRESS_USER=wp_user
WORDPRESS_PASSWORD=wp_password
WORDPRESS_VIRTUAL_HOST=wordpress.omniversal.cloud
WORDPRESS_LETSENCRYPT_HOST=wordpress.omniversal.cloud
LETSENCRYPT_EMAIL=devops@omniversal.cloud

```

### wp-config.php

```php
<?php
define('DB_NAME', 'wordpress');
define('DB_USER', 'wp_user');
define('DB_PASSWORD', 'wp_password');
define('DB_HOST', 'mariadb');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

$table_prefix = 'wp_';

define('WP_DEBUG', false);

if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');

```

### 4. Drupal Configuration

### .env.drupal

```purescript
MYSQL_HOST=mariadb
DRUPAL_DB=drupal
DRUPAL_USER=drupal_user
DRUPAL_PASSWORD=drupal_password
DRUPAL_VIRTUAL_HOST=drupal.omniversal.cloud
DRUPAL_LETSENCRYPT_HOST=drupal.omniversal.cloud
LETSENCRYPT_EMAIL=devops@omniversal.cloud

```

### settings.php

```php
$databases['default']['default'] = array (
  'database' => 'drupal',
  'username' => 'drupal_user',
  'password' => 'drupal_password',
  'host' => 'mariadb',
  'port' => '',
  'driver' => 'mysql',
  'prefix' => '',
);

$settings['trusted_host_patterns'] = [
  '^drupal\\.omniversal\\.cloud$',
];

$settings['file_private_path'] = '/mnt/aether/docker-data/drupal/private';
$settings['file_public_path'] = 'sites/default/files';
$settings['file_temporary_path'] = '/tmp';

```

### 5. Laravel Configuration

### .env.laravel

```purescript
MYSQL_HOST=mariadb
LARAVEL_DB=laravel
LARAVEL_USER=laravel_user
LARAVEL_PASSWORD=laravel_password
LARAVEL_VIRTUAL_HOST=laravel.omniversal.cloud
LARAVEL_LETSENCRYPT_HOST=laravel.omniversal.cloud
LETSENCRYPT_EMAIL=devops@omniversal.cloud

```

### .env (Laravel)

```purescript
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY
APP_DEBUG=true
APP_URL=http://laravel.omniversal.cloud

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=mariadb
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel_user
DB_PASSWORD=laravel_password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```

### 6. JupyterHub Configuration

### .env.jupyterhub

```purescript
JUPYTERHUB_ADMIN=admin
JUPYTERHUB_PASSWORD=jupyter_password

```

### jupyterhub_config.py

```purescript
c = get_config()

c.JupyterHub.admin_users = {'admin'}
c.Authenticator.admin_users = {'admin'}

c.JupyterHub.authenticator_class = 'jupyterhub.auth.PAMAuthenticator'
c.LocalAuthenticator.create_system_users = True

c.JupyterHub.spawner_class = 'jupyterhub.spawner.LocalProcessSpawner'

c.JupyterHub.hub_ip = '0.0.0.0'
c.JupyterHub.hub_port = 8000

c.JupyterHub.ssl_cert = '/etc/ssl/certs/ssl-cert-snakeoil.pem'
c.JupyterHub.ssl_key = '/etc/ssl/private/ssl-cert-snakeoil.key'

```

### 7. Ghost Configuration

### .env.ghost

```purescript
GHOST_DB=ghost
GHOST_DB_USER=ghost_user
GHOST_DB_PASSWORD=ghost_password
GHOST_VIRTUAL_HOST=ghost.omniversal.cloud
GHOST_LETSENCRYPT_HOST=ghost.omniversal.cloud
LETSENCRYPT_EMAIL=devops@omniversal.cloud

```

### config.production.json

```json
{
  "url": "<https://ghost.omniversal.cloud>",
  "server": {
    "port": 2368,
    "host": "0.0.0.0"
  },
  "database": {
    "client": "mysql",
    "connection": {
      "host": "mariadb",
      "user": "ghost_user",
      "password": "ghost_password",
      "database": "ghost"
    }
  },
  "mail": {
    "transport": "Direct"
  },
  "logging": {
    "transports": ["stdout"]
  },
  "process": "local",
  "paths": {
    "contentPath": "/var/lib/ghost/content"
  }
}

```

### 8. PHP Configuration (Common for Nextcloud, WordPress, Drupal, and Laravel)

### php.ini

```purescript
memory_limit = 512M
upload_max_filesize = 0
post_max_size = 0
max_execution_time = 300
max_input_time = 300

```

### Symlink and Directory Setup

```purescript
# Create necessary directories
mkdir -p ~/docker-configs
mkdir -p /mnt/aether/docker-data
mkdir -p /mnt/aether/docker-backend
mkdir -p /mnt/aetherteam/nextcloud/backend

# Create symlinks
ln -s /mnt/aether/docker-data ~/docker-configs/docker-data
ln -s /mnt/aether/docker-backend ~/docker-configs/docker-backend
ln -s /mnt/aetherteam/nextcloud/backend ~/docker-configs/nextcloud-backend

```

### /etc/hosts Entries

```purescript
73.113.207.3 mariadb.omniversal.cloud
73.113.207.3 team.omniversal.cloud
73.113.207.3 wordpress.omniversal.cloud
73.113.207.3 drupal.omniversal.cloud
73.113.207.3 laravel.omniversal.cloud
73.113.207.3 jupyterhub.omniversal.cloud
73.113.207.3 ghost.omniversal.cloud
73.113.207.3 nextcloud.omniversal.local

```

These configurations and settings should be saved in their respective locations within your project directory structure. Each service-specific configuration file (like `mariadb.cnf`, `config.php`, `wp-config.php`, etc.) should be placed in the appropriate directory and referenced correctly in your Docker setup. Let me know if you need any further assistance or modifications.
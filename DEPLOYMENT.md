# Deployment Guide for Digital Ocean

This guide provides detailed steps for deploying your Secret Santa website to Digital Ocean.

## Prerequisites

- Digital Ocean account
- Git installed (for App Platform method)
- Basic command line knowledge (for Droplet method)

## Method 1: App Platform (Easiest - Recommended)

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub
2. Upload your Secret Santa files to the repository
3. Make sure all files are in the root or a single folder

### Step 2: Deploy on Digital Ocean

1. Log into your Digital Ocean account
2. Click **"Create"** → **"Apps"**
3. Click **"Create App"**
4. Choose **"GitHub"** as your source
5. Authorize Digital Ocean to access your GitHub account
6. Select your Secret Santa repository
7. Select the branch (usually `main` or `master`)
8. Choose **"Static Site"** as the resource type
9. Click **"Next"**
10. Review the app configuration
11. Click **"Create Resources"**

### Step 3: Configure Custom Domain (Optional)

1. Go to your app's **"Settings"** tab
2. Scroll to **"Domains"**
3. Click **"Add Domain"**
4. Enter your custom domain
5. Follow DNS configuration instructions

**Cost**: $0/month for basic static sites (within free tier limits)

---

## Method 2: Droplet with Nginx (More Control)

### Step 1: Create a Droplet

1. Log into Digital Ocean
2. Click **"Create"** → **"Droplets"**
3. Choose:
   - **Ubuntu 22.04 LTS**
   - **Basic plan** - $6/month
   - Choose a datacenter region close to your users
   - Select authentication method (SSH key recommended)
4. Click **"Create Droplet"**
5. Wait for droplet to be created (takes ~1 minute)

### Step 2: Connect to Your Droplet

```bash
# Replace YOUR_DROPLET_IP with your actual droplet IP
ssh root@YOUR_DROPLET_IP
```

### Step 3: Install Nginx

```bash
# Update package list
apt update

# Install Nginx
apt install nginx -y

# Check Nginx is running
systemctl status nginx
```

### Step 4: Upload Your Files

**Option A: Using SCP (from your local machine)**

```bash
# Navigate to your project folder on local machine
cd /path/to/secret-santa

# Upload all files to the droplet
scp -r * root@YOUR_DROPLET_IP:/var/www/html/

# Note: This will prompt for your droplet password or use your SSH key
```

**Option B: Using Git**

```bash
# On the droplet
cd /var/www/html
rm index.nginx-debian.html  # Remove default page
git clone YOUR_GITHUB_REPO_URL .
```

**Option C: Using FileZilla (GUI)**

1. Download FileZilla
2. Connect using SFTP:
   - Host: YOUR_DROPLET_IP
   - Username: root
   - Password: (your droplet password)
   - Port: 22
3. Navigate to `/var/www/html/`
4. Delete existing files
5. Upload all Secret Santa files

### Step 5: Set Permissions

```bash
# Ensure proper ownership
chown -R www-data:www-data /var/www/html

# Set proper permissions
chmod -R 755 /var/www/html
```

### Step 6: Configure Nginx (Optional)

```bash
# Edit Nginx configuration
nano /etc/nginx/sites-available/default
```

Update the configuration:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

Save and exit (CTRL+X, then Y, then Enter)

### Step 7: Restart Nginx

```bash
# Test configuration
nginx -t

# Restart Nginx
systemctl restart nginx
```

### Step 8: Configure Firewall

```bash
# Allow HTTP traffic
ufw allow 'Nginx Full'

# Enable firewall
ufw enable

# Check status
ufw status
```

### Step 9: Access Your Site

Open your browser and visit: `http://YOUR_DROPLET_IP`

### Step 10: Add SSL Certificate (Recommended)

```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace yourdomain.com)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts
# Certbot will automatically configure Nginx for HTTPS
```

**Cost**: $6/month (basic droplet)

---

## Method 3: Digital Ocean Spaces (Static Hosting)

### Step 1: Create a Space

1. Click **"Create"** → **"Spaces"**
2. Choose a datacenter region
3. Enable **"CDN"** (recommended)
4. Choose **"Restrict File Listing"** = No
5. Name your Space (e.g., `secret-santa`)
6. Click **"Create Space"**

### Step 2: Enable Static Website Hosting

1. Go to your Space
2. Click **"Settings"**
3. Scroll to **"Static Website Hosting"**
4. Click **"Enable"**
5. Set **Index Document**: `index.html`
6. Set **Error Document**: `index.html`
7. Save changes

### Step 3: Upload Files

1. Click on your Space name
2. Click **"Upload Files"**
3. Select all your Secret Santa files
4. Maintain the folder structure
5. Wait for upload to complete

### Step 4: Make Files Public

1. Select all uploaded files
2. Click **"More"** → **"Manage Permissions"**
3. Set to **"Public"**

### Step 5: Access Your Site

Your site will be available at:
```
https://YOUR_SPACE_NAME.REGION.digitaloceanspaces.com
```

Or with CDN:
```
https://YOUR_SPACE_NAME.REGION.cdn.digitaloceanspaces.com
```

**Cost**: $5/month (includes 250GB storage & 1TB bandwidth)

---

## Updating Your Site

### App Platform
1. Push changes to your GitHub repository
2. Digital Ocean automatically rebuilds and deploys

### Droplet
```bash
# SSH into droplet
ssh root@YOUR_DROPLET_IP

# Navigate to web directory
cd /var/www/html

# Pull latest changes (if using Git)
git pull

# Or upload new files via SCP/FileZilla
```

### Spaces
1. Upload new/modified files through the web interface
2. Overwrite existing files

---

## Troubleshooting

### Site Not Loading
- Check Nginx status: `systemctl status nginx`
- Check error logs: `tail -f /var/log/nginx/error.log`
- Verify files are in `/var/www/html/`
- Check firewall: `ufw status`

### Images Not Showing
- Verify image files are uploaded
- Check file permissions: `ls -la /var/www/html/images/`
- Check browser console for 404 errors

### Assignment System Not Working
- Open browser console (F12) for JavaScript errors
- Verify `js/assignment.js` is uploaded correctly
- Check browser localStorage is enabled

---

## Security Best Practices

1. **Use SSH Keys** instead of password authentication
2. **Enable Firewall**: `ufw enable`
3. **Install SSL Certificate** (free with Let's Encrypt)
4. **Regular Updates**: 
   ```bash
   apt update && apt upgrade -y
   ```
5. **Change SSH Port** (optional but recommended)
6. **Disable Root Login** after creating a non-root user

---

## Cost Summary

| Method | Monthly Cost | Best For |
|--------|-------------|----------|
| App Platform | $0 (free tier) | Beginners, automatic deployments |
| Droplet | $6 | Full control, custom configuration |
| Spaces | $5 | Simple static hosting with CDN |

---

## Need Help?

- Digital Ocean Docs: https://docs.digitalocean.com
- Community Q&A: https://www.digitalocean.com/community
- Support: https://www.digitalocean.com/support

---

**Ready to spread holiday cheer? Deploy your Secret Santa site today! 🎄**

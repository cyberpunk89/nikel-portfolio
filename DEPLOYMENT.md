# Deployment Guide

## Hosting Setup: Docker + Nginx Proxy Manager + Cloudflare Tunnel

This guide covers deploying your Next.js portfolio site using Docker on your PC, with Nginx Proxy Manager handling reverse proxy and Cloudflare Tunnel for external access.

---

## Prerequisites

- Docker Desktop installed and running
- Nginx Proxy Manager installed (can run as Docker container)
- Cloudflare account with a domain
- Cloudflare Tunnel installed on your PC

---

## Step 1: Build the Docker Image

### Option A: Build locally (recommended for initial setup)

```bash
# Navigate to your project directory
cd /home/nikel/Documents/projects/website

# Build the Docker image
docker build -t nikel-portfolio:latest .
```

### Option B: Build for production (with no cache)

```bash
docker build --no-cache -t nikel-portfolio:latest .
```

---

## Step 2: Run the Container Locally

```bash
# Run the container on port 3000
docker run -d \
  --name nikel-portfolio \
  -p 3000:3000 \
  -e NODE_ENV=production \
  nikel-portfolio:latest
```

### Verify it's running

```bash
# Check container status
docker ps

# Check logs if needed
docker logs nikel-portfolio
```

Visit `http://localhost:3000` to verify the site loads.

---

## Step 3: Set up Nginx Proxy Manager

### If you don't have Nginx Proxy Manager running:

```bash
# Create a docker-compose.yml for Nginx Proxy Manager
# Save as nginx-proxy-manager.yml

version: '3.8'
services:
  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./nginx-proxy-manager-data:/data
      - ./nginx-proxy-manager/letsencrypt:/etc/letsencrypt
    environment:
      - CPANEL_USERNAME=admin
      - CPANEL_PASSWORD=changeme
    networks:
      - nginx-proxy-manager-network

networks:
  nginx-proxy-manager-network:
    name: nginx-proxy-manager-network
```

```bash
# Start Nginx Proxy Manager
docker-compose -f nginx-proxy-manager.yml up -d
```

### Access Nginx Proxy Manager Dashboard

- Open browser to `http://localhost:81`
- Default login: `admin@example.com` / `changeme`
- **Change the password immediately!**

---

## Step 4: Configure Proxy Host in Nginx Proxy Manager

1. **Log in** to Nginx Proxy Manager dashboard
2. Go to **Hosts** → **Proxy Hosts**
3. Click **Add Proxy Host**
4. Configure:

| Field | Value |
|-------|-------|
| Domain Name | your-domain.com (e.g., nikel.design) |
| Scheme | http |
| Forward Hostname / IP | host.docker.internal (Windows) or IP of Docker host |
| Port | 3000 |
| Cache Assets | Enable |
| Block Common Exploits | Enable |

5. Under **SSL Tab**:
   - Request new SSL certificate
   - Enable "Force SSL"
   - Enable "HTTP/2 Support"
   - Enable "HSTS Enabled"

6. Click **Save**

---

## Step 5: Set up Cloudflare Tunnel

### Install Cloudflare Tunnel on your PC

**Windows (using winget):**
```powershell
winget install Cloudflare.cloudflared
```

**Mac (using Homebrew):**
```bash
brew install cloudflare/cloudflare/cloudflared
```

**Linux:**
```bash
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
chmod +x cloudflared
sudo mv cloudflared /usr/local/bin/
```

### Create a Tunnel

```bash
# Log in to Cloudflare
cloudflared tunnel login

# Create a new tunnel
cloudflared tunnel create nikel-portfolio

# Note the tunnel ID (e.g., a1b2c3d4-...)
```

### Configure DNS and Route

```bash
# Add your domain to the tunnel
cloudflared tunnel route dns nikel-portfolio your-domain.com
```

### Create the tunnel configuration file

Save as `cloudflared-config.yml`:

```yaml
tunnel: YOUR_TUNNEL_ID
credentials-file: /path/to/your/credentials.json

ingress:
  - hostname: your-domain.com
    service: http://localhost:80
  - service: http_status:404
```

### Run the tunnel

```bash
# Run in background
cloudflared tunnel --config cloudflared-config.yml run
```

Or as a systemd service (Linux):

```bash
sudo cloudflared service install
sudo systemctl start cloudflared
```

---

## Step 6: Verify Everything Works

1. **Check Docker container is running:**
   ```bash
   docker ps
   ```

2. **Check Nginx Proxy Manager:**
   - Visit `http://localhost:81`
   - Verify proxy host is active

3. **Check Cloudflare Tunnel:**
   ```bash
   cloudflared tunnel info nikel-portfolio
   ```

4. **Visit your domain:**
   - Open `https://your-domain.com`
   - Verify SSL is working
   - Test navigation

---

## Useful Commands

### Restart the portfolio container
```bash
docker restart nikel-portfolio
```

### Rebuild after code changes
```bash
# Stop and remove old container
docker rm -f nikel-portfolio

# Rebuild and run
docker build -t nikel-portfolio:latest .
docker run -d --name nikel-portfolio -p 3000:3000 nikel-portfolio:latest
```

### Check logs
```bash
# Portfolio logs
docker logs nikel-portfolio -f

# Nginx Proxy Manager logs
docker logs nginx-proxy-manager -f

# Cloudflare Tunnel logs
cloudflared tunnel log
```

### Update the site with new changes
```bash
# Make your code changes, then:
docker build -t nikel-portfolio:latest .
docker stop nikel-portfolio
docker rm nikel-portfolio
docker run -d --name nikel-portfolio -p 3000:3000 nikel-portfolio:latest
```

---

## Troubleshooting

### Container won't start
```bash
# Check for port conflicts
docker ps -a
netstat -ano | findstr :3000
```

### SSL certificate issues
- In Nginx Proxy Manager, try deleting and recreating the SSL certificate
- Check Cloudflare Tunnel is properly routing to your domain

### Can't reach the site from outside
- Check Cloudflare Tunnel status: `cloudflared tunnel list`
- Verify DNS is pointing to Cloudflare: `dig your-domain.com`
- Check Cloudflare proxy is enabled (orange cloud)

### Performance issues
- Enable nginx caching in Proxy Host settings
- Consider adding a CDN (Cloudflare itself handles this)
- Check Docker resource limits

---

## Security Recommendations

1. **Keep Docker updated:** `docker update --self-contained`
2. **Use environment variables** for sensitive data
3. **Enable Cloudflare security features** (Bot Fight Mode, Rate Limiting)
4. **Regular backups** of your Nginx Proxy Manager data
5. **Monitor logs** for suspicious activity

---

## Quick Reference

| Service | URL | Default Credentials |
|---------|-----|---------------------|
| Portfolio Site | `http://localhost:3000` | - |
| Nginx Proxy Manager | `http://localhost:81` | admin / changeme |
| Cloudflare Dashboard | `https://dash.cloudflare.com` | Your login |

---

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Docker docs: https://docs.docker.com
- Nginx Proxy Manager: https://nginx-proxy-manager.readthedocs.io
- Cloudflare Tunnel: https://developers.cloudflare.com/cloudflare-one/tutorials/quick-start
# Docker Setup Guide

Complete guide for Docker configuration and deployment of the Node.js Demo App.

## 🐳 Docker Overview

This project uses Docker for containerization with production-ready configuration including:
- Alpine Linux base image for security
- Multi-stage builds for optimization
- Non-root user for security
- Built-in health checks
- Production environment optimization

## 📋 Prerequisites

### System Requirements
- Docker Desktop 4.0+ or Docker Engine 20.0+
- 2GB+ available RAM
- 5GB+ available disk space

### Installation

#### Windows
```bash
# Download Docker Desktop from docker.com
# Or use Chocolatey
choco install docker-desktop
```

#### macOS
```bash
# Download Docker Desktop from docker.com
# Or use Homebrew
brew install --cask docker
```

#### Linux (Ubuntu/Debian)
```bash
# Update package index
sudo apt-get update

# Install Docker
sudo apt-get install docker.io docker-compose

# Add user to docker group
sudo usermod -aG docker $USER
```

## 🏗️ Docker Configuration

### Dockerfile Analysis

The application uses a production-optimized Dockerfile:

```dockerfile
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application code
COPY src/ ./src/

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership of app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start application
CMD ["npm", "start"]
```

### Key Features
- **Alpine Linux**: Minimal 5MB base image
- **Security**: Non-root user execution
- **Health Checks**: Built-in monitoring
- **Optimization**: Production-only dependencies

## 🚀 Building and Running

### Local Development

#### Build Image
```bash
# Navigate to nodejs-demo-app directory
cd nodejs-demo-app

# Build Docker image
docker build -t nodejs-demo-app .

# Build with custom tag
docker build -t nodejs-demo-app:v1.0.0 .
```

#### Run Container
```bash
# Run container
docker run -p 3000:3000 nodejs-demo-app

# Run in detached mode
docker run -d -p 3000:3000 --name demo-app nodejs-demo-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production nodejs-demo-app
```

#### Test Application
```bash
# Test main endpoint
curl http://localhost:3000

# Test health endpoint
curl http://localhost:3000/health

# Test API endpoint
curl http://localhost:3000/api/users
```

### Production Deployment

#### Build Production Image
```bash
# Build optimized production image
docker build -t nodejs-demo-app:production ./nodejs-demo-app

# Multi-platform build (if needed)
docker buildx build --platform linux/amd64,linux/arm64 -t nodejs-demo-app:production ./nodejs-demo-app
```

#### Run Production Container
```bash
# Run production container
docker run -d \
  --name nodejs-demo-app-prod \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  nodejs-demo-app:production
```

## 🔍 Container Management

### Basic Commands

#### Container Operations
```bash
# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop nodejs-demo-app

# Start container
docker start nodejs-demo-app

# Restart container
docker restart nodejs-demo-app

# Remove container
docker rm nodejs-demo-app
```

#### Image Operations
```bash
# List images
docker images

# Remove image
docker rmi nodejs-demo-app

# Pull image from registry
docker pull nodejs-demo-app:latest

# Tag image
docker tag nodejs-demo-app:latest nodejs-demo-app:v1.0.0
```

### Monitoring and Debugging

#### Container Logs
```bash
# View logs
docker logs nodejs-demo-app

# Follow logs in real-time
docker logs -f nodejs-demo-app

# View last 100 lines
docker logs --tail 100 nodejs-demo-app
```

#### Container Inspection
```bash
# Inspect container
docker inspect nodejs-demo-app

# View container stats
docker stats nodejs-demo-app

# Execute commands in container
docker exec -it nodejs-demo-app sh
```

#### Health Check Status
```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' nodejs-demo-app

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' nodejs-demo-app
```

## 🔧 Docker Compose (Optional)

For more complex deployments, use Docker Compose:

### docker-compose.yml
```yaml
version: '3.8'

services:
  nodejs-demo-app:
    build:
      context: ./nodejs-demo-app
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - nodejs-demo-app
    restart: unless-stopped
```

### Docker Compose Commands
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up --build -d
```

## 🐳 Docker Hub Integration

### Prepare for Docker Hub

#### Tag for Docker Hub
```bash
# Tag image for Docker Hub
docker tag nodejs-demo-app:latest [your-username]/nodejs-demo-app:latest
docker tag nodejs-demo-app:latest [your-username]/nodejs-demo-app:v1.0.0
```

#### Push to Docker Hub
```bash
# Login to Docker Hub
docker login

# Push images
docker push [your-username]/nodejs-demo-app:latest
docker push [your-username]/nodejs-demo-app:v1.0.0
```

#### Pull from Docker Hub
```bash
# Pull image
docker pull [your-username]/nodejs-demo-app:latest

# Run pulled image
docker run -p 3000:3000 [your-username]/nodejs-demo-app:latest
```

## 🔒 Security Best Practices

### Image Security
- Use official Node.js Alpine images
- Run as non-root user
- Minimize installed packages
- Regular security updates

### Container Security
```bash
# Run with read-only filesystem
docker run --read-only -p 3000:3000 nodejs-demo-app

# Limit resources
docker run --memory=512m --cpus=1 -p 3000:3000 nodejs-demo-app

# Drop capabilities
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE -p 3000:3000 nodejs-demo-app
```

## 📊 Performance Optimization

### Build Optimization
- Use .dockerignore file
- Multi-stage builds
- Layer caching
- Minimal base images

### Runtime Optimization
```bash
# Set memory limits
docker run --memory=256m -p 3000:3000 nodejs-demo-app

# Set CPU limits
docker run --cpus=0.5 -p 3000:3000 nodejs-demo-app

# Use production environment
docker run -e NODE_ENV=production -p 3000:3000 nodejs-demo-app
```

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 [PID]

# Use different port
docker run -p 3001:3000 nodejs-demo-app
```

#### Container Won't Start
```bash
# Check logs
docker logs nodejs-demo-app

# Run interactively
docker run -it nodejs-demo-app sh

# Check health status
docker inspect nodejs-demo-app
```

#### Build Failures
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t nodejs-demo-app ./nodejs-demo-app
```

### Health Check Debugging
```bash
# Manual health check
curl http://localhost:3000/health

# Check container health
docker inspect --format='{{.State.Health}}' nodejs-demo-app
```

## 📝 Best Practices Summary

1. **Use Alpine images** for smaller footprint
2. **Run as non-root user** for security
3. **Implement health checks** for monitoring
4. **Use multi-stage builds** for optimization
5. **Set resource limits** for stability
6. **Regular security updates** for safety
7. **Monitor container logs** for debugging
8. **Use Docker Compose** for complex deployments

---

**Docker setup complete! Your Node.js application is ready for containerized deployment.**
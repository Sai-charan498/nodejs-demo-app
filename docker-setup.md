# Docker Setup Guide

## Prerequisites
1. **Start Docker Desktop**: Make sure Docker Desktop is running on your Windows machine
2. **Verify Docker**: Run `docker --version` to confirm Docker is available

## Build and Run Instructions

### Production Build (Recommended)
```bash
# Build the production image
docker build -t react-app .

# Run the production container
docker run -p 3000:80 react-app

# Or use docker-compose
docker-compose --profile prod up --build
```

### Development Build (with hot reloading)
```bash
# Build and run development container
docker-compose --profile dev up --build
```

## Access Your Application
- **Production**: http://localhost:3000
- **Development**: http://localhost:8080

## Troubleshooting

### Docker Desktop Not Running
If you get the error: `error during connect: Head "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/_ping"`

**Solution**: Start Docker Desktop from your Windows Start menu

### Build Fails
1. Make sure all files are saved
2. Check that you're in the project root directory
3. Verify Docker Desktop is running

### Port Already in Use
If port 3000 or 8080 is busy:
```bash
# Use different ports
docker run -p 3001:80 react-app  # Production on port 3001
docker run -p 8081:8080 react-app-dev  # Development on port 8081
```

## Docker Commands Reference
```bash
# List running containers
docker ps

# Stop a container
docker stop <container-id>

# Remove containers
docker rm <container-id>

# List images
docker images

# Remove an image
docker rmi react-app
```
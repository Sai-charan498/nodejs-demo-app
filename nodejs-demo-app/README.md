# Node.js Express Demo Application

A production-ready Express.js application demonstrating REST API development with comprehensive testing, Docker containerization, and CI/CD integration.

## 🚀 Application Overview

This Express.js application serves as a demonstration of modern Node.js development practices, featuring a RESTful API with health monitoring, comprehensive testing, and production-ready deployment configuration.

## 📋 Features

- **Express.js Server**: Fast, lightweight web framework
- **RESTful API**: Well-structured endpoints with JSON responses
- **Health Monitoring**: Built-in health check endpoint for deployment validation
- **Error Handling**: Comprehensive error management and logging
- **Docker Ready**: Production-optimized containerization
- **Testing Suite**: Complete Jest and Supertest integration
- **Code Quality**: ESLint configuration with best practices
- **Security**: Non-root Docker user and secure defaults

## 🔧 API Endpoints

### Core Endpoints

#### `GET /` - Welcome Endpoint
**Description**: Application welcome and status information  
**Response Format**: JSON  
**Status Codes**: 200 (Success), 500 (Server Error)

**Example Request**:
```bash
curl http://localhost:3000/
```

**Example Response**:
```json
{
  "message": "Welcome to Node.js Demo App!",
  "version": "1.0.0",
  "status": "running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "uptime": 123.456
}
```

#### `GET /health` - Health Check
**Description**: Health monitoring endpoint for load balancers and monitoring systems  
**Response Format**: JSON  
**Status Codes**: 200 (Healthy), 503 (Unhealthy)

**Example Request**:
```bash
curl http://localhost:3000/health
```

**Example Response**:
```json
{
  "status": "healthy",
  "uptime": 123.456,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "memory": {
    "used": "45.2 MB",
    "total": "512 MB"
  },
  "version": "1.0.0"
}
```

#### `GET /api/users` - Users API
**Description**: Sample users data endpoint demonstrating API structure  
**Response Format**: JSON  
**Status Codes**: 200 (Success), 500 (Server Error)

**Example Request**:
```bash
curl http://localhost:3000/api/users
```

**Example Response**:
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "developer",
      "active": true
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "designer",
      "active": true
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com",
      "role": "manager",
      "active": false
    }
  ],
  "total": 3,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🛠️ Development Setup

### Prerequisites
- **Node.js 18+** - JavaScript runtime
- **npm** - Package manager
- **Docker** (optional) - For containerized development

### Installation and Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Start with nodemon** (development mode)
   ```bash
   npm run dev
   ```

4. **Access the application**
   ```
   http://localhost:3000
   ```

### Environment Configuration

Create a `.env` file for local development:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Application Settings
APP_NAME="Node.js Demo App"
APP_VERSION="1.0.0"

# Logging
LOG_LEVEL=info
```

## 🧪 Testing

The application includes comprehensive testing with Jest and Supertest.

### Test Structure
```
test/
├── app.test.js           # Main application tests
├── routes.test.js        # Route-specific tests
├── health.test.js        # Health check tests
└── api.test.js           # API endpoint tests
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- app.test.js

# Run tests with verbose output
npm test -- --verbose
```

### Test Coverage Areas

- ✅ **Server Initialization**: Application startup and configuration
- ✅ **Route Handlers**: All endpoint functionality
- ✅ **Error Handling**: Error responses and edge cases
- ✅ **Health Checks**: Monitoring endpoint validation
- ✅ **API Responses**: JSON structure and data validation
- ✅ **Status Codes**: HTTP response code verification

### Example Test Output
```
 PASS  test/app.test.js
  ✓ should start server on port 3000 (25ms)
  ✓ should respond to GET / (15ms)
  ✓ should respond to GET /health (12ms)
  ✓ should respond to GET /api/users (18ms)
  ✓ should handle 404 errors (10ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.5s
```

## 🐳 Docker Usage

### Dockerfile Features
- **Alpine Linux**: Minimal security footprint (5MB base)
- **Non-root User**: Security best practices
- **Health Checks**: Built-in container monitoring
- **Multi-stage Build**: Optimized for production
- **Dependency Optimization**: Production-only packages

### Build and Run

#### Local Development
```bash
# Build Docker image
docker build -t nodejs-demo-app .

# Run container
docker run -p 3000:3000 nodejs-demo-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production nodejs-demo-app

# Run in background
docker run -d -p 3000:3000 --name demo-app nodejs-demo-app
```

#### Production Deployment
```bash
# Build production image
docker build -t nodejs-demo-app:production .

# Run production container
docker run -d \
  --name nodejs-demo-app-prod \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  nodejs-demo-app:production
```

### Container Management

```bash
# View container logs
docker logs nodejs-demo-app

# Follow logs in real-time
docker logs -f nodejs-demo-app

# Execute commands in container
docker exec -it nodejs-demo-app sh

# Check container health
docker inspect --format='{{.State.Health.Status}}' nodejs-demo-app

# Stop and remove container
docker stop nodejs-demo-app
docker rm nodejs-demo-app
```

## 📊 Performance and Monitoring

### Application Metrics
- **Startup Time**: < 2 seconds
- **Memory Usage**: ~45MB (production)
- **Response Time**: < 50ms (average)
- **Health Check**: < 10ms response

### Monitoring Endpoints
- `/health` - Application health status
- `/` - Basic application information
- Container health checks via Docker

### Production Considerations
- **Process Management**: Single process with graceful shutdown
- **Error Logging**: Structured logging for debugging
- **Resource Limits**: Configurable memory and CPU limits
- **Health Monitoring**: Built-in health check endpoint

## 🔒 Security Features

### Application Security
- **Input Validation**: Request parameter validation
- **Error Handling**: Secure error responses (no stack traces in production)
- **Headers**: Security headers configuration
- **Dependencies**: Regular security audits with `npm audit`

### Container Security
- **Non-root User**: Application runs as `nodejs` user (UID 1001)
- **Minimal Base**: Alpine Linux with minimal attack surface
- **Read-only Filesystem**: Container filesystem restrictions
- **Resource Limits**: Memory and CPU constraints

## 📁 Project Structure

```
nodejs-demo-app/
├── src/
│   └── index.js              # Main Express application
├── test/
│   └── app.test.js           # Comprehensive test suite
├── Dockerfile                # Production container configuration
├── .dockerignore             # Docker build exclusions
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
├── .env.example              # Environment variables template
└── README.md                 # This documentation
```

## 🚀 Deployment

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 3000 | No |
| `NODE_ENV` | Environment mode | development | No |
| `APP_NAME` | Application name | Node.js Demo App | No |
| `LOG_LEVEL` | Logging level | info | No |

### Production Deployment

```bash
# Set production environment
export NODE_ENV=production
export PORT=3000

# Start application
npm start
```

### Docker Production Deployment

```bash
# Pull from registry
docker pull [registry]/nodejs-demo-app:latest

# Run production container
docker run -d \
  --name nodejs-demo-app \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  [registry]/nodejs-demo-app:latest
```

## 🔍 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 [PID]

# Use different port
PORT=3001 npm start
```

#### Container Won't Start
```bash
# Check container logs
docker logs nodejs-demo-app

# Run interactively for debugging
docker run -it nodejs-demo-app sh
```

#### Health Check Failures
```bash
# Test health endpoint manually
curl http://localhost:3000/health

# Check application logs
docker logs nodejs-demo-app
```

## 📝 Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `npm start` | Start production server |
| `dev` | `npm run dev` | Start development server with nodemon |
| `test` | `npm test` | Run test suite |
| `test:coverage` | `npm run test:coverage` | Run tests with coverage |
| `test:watch` | `npm run test:watch` | Run tests in watch mode |
| `lint` | `npm run lint` | Run ESLint |
| `build` | `npm run build` | Build application |

## 🤝 Contributing

1. Follow existing code style and patterns
2. Add tests for new features
3. Ensure all tests pass
4. Update documentation as needed
5. Use meaningful commit messages

## 📄 License

This project is part of the Node.js Demo App CI/CD Pipeline Project and is licensed under the MIT License.

---

**Part of the comprehensive Node.js CI/CD demonstration project**  
**For full project documentation, see the [main README](../README.md)**
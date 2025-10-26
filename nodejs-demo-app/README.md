# Node.js Express Demo Application

A simple yet robust Node.js Express application demonstrating REST API development with comprehensive testing and Docker containerization.

## 🚀 Application Overview

This Express.js application provides a RESTful API with health monitoring capabilities, designed for production deployment with Docker containerization and CI/CD integration.

## 📋 Features

- **Express.js Server**: Lightweight and fast web framework
- **Health Check Endpoint**: Built-in monitoring for deployment validation
- **REST API**: Sample users endpoint demonstrating API structure
- **Error Handling**: Comprehensive error management
- **Docker Ready**: Production-optimized containerization
- **Testing Suite**: Jest and Supertest integration
- **Code Quality**: ESLint configuration

## 🔧 API Endpoints

### Core Endpoints
- **GET /** - Application welcome and status
- **GET /health** - Health check for monitoring systems
- **GET /api/users** - Sample users data endpoint

### Response Examples

#### Welcome Endpoint
```bash
curl http://localhost:3000/
```
```json
{
  "message": "Welcome to Node.js Demo App!",
  "version": "1.0.0",
  "status": "running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Health Check
```bash
curl http://localhost:3000/health
```
```json
{
  "status": "healthy",
  "uptime": 123.456,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Users API
```bash
curl http://localhost:3000/api/users
```
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Run in development mode with nodemon (if available)
npm run dev
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

## 🐳 Docker Usage

### Build and Run
```bash
# Build Docker image
docker build -t nodejs-demo-app .

# Run container
docker run -p 3000:3000 nodejs-demo-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production nodejs-demo-app
```

### Docker Features
- **Alpine Linux**: Minimal security footprint
- **Non-root User**: Security best practices
- **Health Checks**: Built-in container monitoring
- **Multi-stage Build**: Optimized for production

## 📁 Project Structure

```
nodejs-demo-app/
├── src/
│   └── index.js              # Main application file
├── test/
│   └── app.test.js           # Test suite
├── Dockerfile                # Docker configuration
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
└── README.md                 # This file
```

## 🧪 Testing

The application includes comprehensive testing with:

- **Unit Tests**: Core functionality testing
- **Integration Tests**: API endpoint testing
- **Health Check Tests**: Monitoring endpoint validation
- **Error Handling Tests**: Error response validation

### Test Coverage
- Routes and endpoints
- Error handling
- Health check functionality
- API response validation

## 🔒 Security Features

- **Non-root Docker User**: Container security
- **Input Validation**: Request parameter validation
- **Error Handling**: Secure error responses
- **Health Monitoring**: Application status tracking

## 📊 Performance

- **Lightweight**: Minimal dependencies
- **Fast Startup**: Quick application initialization
- **Efficient Routing**: Express.js optimization
- **Docker Optimized**: Multi-stage build for production

## 🚀 Deployment

### Environment Variables
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

### Production Deployment
```bash
# Set production environment
export NODE_ENV=production

# Start application
npm start
```

### Docker Deployment
```bash
# Production container
docker run -d -p 3000:3000 --name nodejs-demo-app nodejs-demo-app

# With custom port
docker run -d -p 8080:3000 --name nodejs-demo-app nodejs-demo-app
```

## 🔍 Monitoring

### Health Check
The `/health` endpoint provides:
- Application status
- Uptime information
- Timestamp for monitoring

### Logging
- Request logging
- Error logging
- Application startup logs

## 🤝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Ensure all tests pass
4. Update documentation as needed

## 📄 Scripts

- `npm start` - Start the application
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run build` - Build application (placeholder)

---

**Part of the Node.js Demo App CI/CD Pipeline Project**
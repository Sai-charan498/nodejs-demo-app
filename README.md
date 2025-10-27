# Node.js Demo App with CI/CD Pipeline

A comprehensive Node.js Express demonstration application with automated CI/CD pipeline integration. This project showcases modern DevOps practices with Docker containerization, GitHub Actions automation, and production-ready deployment workflows.

**Live Demo**: [GitHub Repository](https://github.com/Sai-charan498/nodejs-demo-app)  
**DockerHub Repository**: [DockerHub Repository Link](https://hub.docker.com/r/[your-username]/nodejs-demo-app)

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [Development Setup](#-development-setup)
- [Docker Usage](#-docker-usage)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **RESTful API**: Express.js server with health monitoring and user endpoints
- **Production-Ready**: Optimized Docker containerization with Alpine Linux
- **Automated CI/CD**: Complete GitHub Actions pipeline with testing and deployment
- **DockerHub Integration**: Automated multi-platform image building and publishing
- **Comprehensive Testing**: Unit and integration tests with Jest and Supertest
- **Security Best Practices**: Non-root Docker user, health checks, and error handling
- **Multi-Platform Support**: Docker images for AMD64 and ARM64 architectures
- **Professional Logging**: Structured logging with deployment summaries

## 🛠 Technology Stack

### Backend
- **Node.js (v18+)** - JavaScript runtime with LTS support
- **Express.js (v4.18+)** - Fast, unopinionated web framework
- **Jest (v29+)** - JavaScript testing framework
- **Supertest (v6+)** - HTTP assertion testing

### DevOps & Deployment
- **Docker** - Containerization with Alpine Linux base
- **GitHub Actions** - CI/CD automation and workflow management
- **DockerHub** - Container registry for image distribution
- **Docker Buildx** - Multi-platform image building
- **ESLint** - Code quality and style enforcement

### Infrastructure
- **Alpine Linux** - Minimal, security-focused container base
- **Multi-stage Builds** - Optimized production containers
- **Health Checks** - Built-in container monitoring
- **GitHub Secrets** - Secure credential management

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **Docker** installed ([Download here](https://www.docker.com/))
- **Git** installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sai-charan498/nodejs-demo-app.git
   cd nodejs-demo-app
   ```

2. **Install dependencies**
   ```bash
   cd nodejs-demo-app
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 💻 Development Setup

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm start

# Start with nodemon (if available)
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Build application
npm run build
```

### Environment Variables
Create a `.env` file in the nodejs-demo-app directory:
```env
PORT=3000
NODE_ENV=development
```

## 🐳 Docker Usage

### Build and Run Locally
```bash
# Build Docker image
docker build -t nodejs-demo-app ./nodejs-demo-app

# Run container
docker run -p 3000:3000 nodejs-demo-app

# Run container in background
docker run -d -p 3000:3000 --name demo-app nodejs-demo-app

# View container logs
docker logs demo-app
```

### Pull from DockerHub
```bash
# Pull latest image
docker pull [DOCKERHUB_USERNAME]/nodejs-demo-app:latest

# Run pulled image
docker run -p 3000:3000 [DOCKERHUB_USERNAME]/nodejs-demo-app:latest
```

### Docker Compose (Optional)
```yaml
version: '3.8'
services:
  nodejs-demo-app:
    image: [DOCKERHUB_USERNAME]/nodejs-demo-app:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that automatically:

### Pipeline Stages

1. **Code Quality & Testing** - Linting, unit tests, and build verification
2. **Docker Build** - Local image creation and testing
3. **DockerHub Publishing** - Multi-platform image publishing
4. **Production Deployment** - End-to-end deployment validation

### Workflow Triggers
- **Push to main branch** - Full pipeline execution
- **Pull requests** - Testing and validation only

### Required Secrets
Configure these secrets in your GitHub repository settings:

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `DOCKER_HUB_USERNAME` | Your DockerHub username | ✅ |
| `DOCKER_HUB_ACCESS_TOKEN` | Your DockerHub access token | ✅ |

### Pipeline Status
```
✅ Test & Lint → ✅ Docker Build → ✅ DockerHub Publish → ✅ Deploy
```

## 🧪 Testing

### Test Structure
```
nodejs-demo-app/test/
├── app.test.js           # Express server and API endpoint tests
└── [additional tests]    # Extended test coverage
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode for development
npm run test:watch

# Run specific test file
npm test -- app.test.js
```

### Test Coverage
The project maintains comprehensive test coverage across:
- ✅ Express server routes and middleware
- ✅ API endpoint functionality (/health, /, /api/users)
- ✅ Error handling scenarios
- ✅ Application startup and configuration
- ✅ Docker container health checks

## 📁 Project Structure

```
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml              # CI/CD pipeline configuration
├── nodejs-demo-app/              # Main application directory
│   ├── src/
│   │   └── index.js              # Express server application
│   ├── test/
│   │   └── app.test.js           # Comprehensive test suite
│   ├── Dockerfile                # Production container configuration
│   ├── package.json              # Project dependencies and scripts
│   ├── package-lock.json         # Dependency lock file
│   └── README.md                 # Application-specific documentation
├── .kiro/
│   └── specs/                    # Feature specifications and requirements
├── docker-setup.md               # Docker configuration guide
├── README.md                     # Main project documentation (this file)
└── [additional config files]     # Various configuration files
```

### Configuration Files

| File | Purpose | Key Features |
|------|---------|--------------|
| `package.json` | Project configuration | Dependencies, scripts, Node.js version |
| `Dockerfile` | Container definition | Multi-stage build, security, health checks |
| `.github/workflows/main.yml` | CI/CD pipeline | Automated testing, building, deployment |
| `.dockerignore` | Build optimization | Excludes unnecessary files from build |

## 📚 API Documentation

### Endpoints

#### GET /
- **Description**: Serves the main application welcome page
- **Response**: JSON with application information
- **Status Codes**: 200 (Success), 500 (Server Error)
- **Example Response**:
  ```json
  {
    "message": "Welcome to Node.js Demo App!",
    "version": "1.0.0",
    "status": "running",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

#### GET /health
- **Description**: Health check endpoint for monitoring
- **Response**: JSON with health status
- **Status Codes**: 200 (Healthy), 503 (Unhealthy)
- **Example Response**:
  ```json
  {
    "status": "healthy",
    "uptime": 123.456,
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

#### GET /api/users
- **Description**: Sample users API endpoint
- **Response**: JSON array of user objects
- **Status Codes**: 200 (Success), 500 (Server Error)
- **Example Response**:
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

### Error Handling
- **404 Errors**: Custom "Page not found" response
- **500 Errors**: Generic error message with server logging
- **Health Check Failures**: Detailed status information

## 📚 Documentation

This project includes comprehensive documentation to help developers understand, contribute to, and deploy the application:

### Core Documentation

| Document | Purpose | Audience |
|----------|---------|----------|
| `README.md` | Project overview, quick start | All users |
| `nodejs-demo-app/README.md` | Application-specific guide | Developers |
| `docker-setup.md` | Docker configuration guide | DevOps, developers |
| `.kiro/specs/` | Feature specifications | Contributors, architects |

### Additional Resources
- **GitHub Issues** - Bug reports and feature requests
- **GitHub Actions** - CI/CD workflow logs and history
- **DockerHub** - Container image repository and tags
- **Wiki** - Extended documentation and tutorials

### Documentation Structure

The documentation follows a hierarchical structure:
- **Project Level**: Overall architecture and setup
- **Application Level**: Code structure and API details
- **Infrastructure Level**: Docker and deployment guides
- **Process Level**: CI/CD and contribution workflows

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests for new functionality**
5. **Run the test suite**
   ```bash
   npm test
   ```
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use meaningful commit messages
- Follow semantic versioning for releases

### Code Quality Standards
- **ESLint**: Code style and quality enforcement
- **Jest**: Comprehensive test coverage
- **Docker**: Container best practices
- **Security**: Non-root users, minimal dependencies

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern DevOps practices and CI/CD methodologies
- Powered by open-source technologies and community contributions
- Built with Node.js, Express.js, Docker, and GitHub Actions
- Designed for educational and demonstration purposes

---

**Built with ❤️ using Node.js, Docker, and GitHub Actions**

For more information, visit our [GitHub repository](https://github.com/Sai-charan498/nodejs-demo-app) or check out the [live demo](https://github.com/Sai-charan498/nodejs-demo-app).
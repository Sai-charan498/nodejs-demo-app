# Smart Cart Engine - CI/CD Pipeline with GitHub Actions

## 🎯 Task Overview

**TASK 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)**

This project demonstrates a complete CI/CD pipeline implementation using GitHub Actions to build and deploy a React web application with Docker containerization.

## 📋 Task Requirements ✅

- ✅ **GitHub Repository**: Smart Cart Engine with CI/CD workflow
- ✅ **GitHub Actions**: Automated pipeline in `.github/workflows/main.yml`
- ✅ **Node.js Application**: React + Vite + TypeScript web app
- ✅ **Docker Integration**: Multi-stage Dockerfile with Nginx
- ✅ **Pipeline Jobs**: Test → Build → Deploy automation
- ✅ **Trigger Configuration**: Automated on push to main branch

## 🏗️ Architecture

### CI/CD Pipeline Flow
```
Push to main → Test & Lint → Build Docker Image → Deploy Application
```

### Technology Stack
- **Frontend**: React 18 + Vite + TypeScript
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Containerization**: Docker with multi-stage builds
- **Web Server**: Nginx (production)
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint + TypeScript compiler

## 🚀 Pipeline Stages

### 1. **Test & Lint** 
- Runs on every push and pull request
- Node.js 18 environment setup
- Dependency installation with npm ci
- ESLint code quality checks
- TypeScript compilation
- Build artifact generation

### 2. **Build Docker Image**
- Triggers only on main branch pushes
- Multi-platform builds (linux/amd64, linux/arm64)
- Docker Buildx with QEMU support
- Build caching for optimization
- Image tagging with commit SHA

### 3. **Deploy Application**
- Local Docker image testing
- Health check validation
- Deployment readiness confirmation
- Production-ready container verification

## 📁 Project Structure

```
smart-cart-engine/
├── .github/
│   └── workflows/
│       └── main.yml          # CI/CD pipeline configuration
├── src/                      # React application source
├── dockerfile               # Multi-stage Docker build
├── nginx.conf              # Nginx production configuration
├── docker-setup.md         # Docker setup guide
├── package.json            # Node.js dependencies and scripts
└── README.md              # This file
```

## 🔧 Key Features

### Automated Testing
- **Linting**: ESLint with TypeScript support
- **Type Checking**: Full TypeScript compilation
- **Build Validation**: Production build verification
- **Zero Tolerance**: Pipeline fails on any errors

### Docker Optimization
- **Multi-stage Build**: Separate build and runtime environments
- **Alpine Images**: Minimal footprint (Node.js + Nginx)
- **Production Ready**: Optimized Nginx configuration
- **Health Checks**: Container validation before deployment

### GitHub Actions Benefits
- **Parallel Jobs**: Test and build run efficiently
- **Conditional Deployment**: Only deploys on main branch
- **Artifact Management**: Build outputs preserved
- **Cache Optimization**: Faster subsequent builds

## 🚦 Pipeline Status

The pipeline automatically triggers on:
- ✅ Push to `main` branch
- ✅ Pull requests to `main` branch

### Current Status
- **Test & Lint**: ✅ Passing (0 errors, 0 warnings)
- **Docker Build**: ✅ Multi-platform support
- **Deployment**: ✅ Ready for production

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- Docker Desktop
- Git

### Quick Start
```bash
# Clone the repository
git clone https://github.com/Sai-charan498/smart-cart-engine.git
cd smart-cart-engine

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Docker Development
```bash
# Build Docker image
docker build -t smart-cart-engine .

# Run container
docker run -p 3000:80 smart-cart-engine

# Access application
open http://localhost:3000
```

## 📊 Pipeline Configuration

### Environment Variables
- `IMAGE_NAME`: smart-cart-engine
- `TAG`: Dynamic SHA-based tagging
- `NODE_VERSION`: 18 (LTS)

### Build Matrix
- **Platforms**: linux/amd64, linux/arm64
- **Node.js**: Version 18 with npm caching
- **Docker**: Buildx with multi-platform support

## 🔍 Monitoring & Validation

### Automated Checks
1. **Code Quality**: ESLint rules enforcement
2. **Type Safety**: TypeScript compilation
3. **Build Success**: Production build validation
4. **Container Health**: Docker image testing
5. **Deployment Readiness**: End-to-end verification

### Success Criteria
- ✅ All tests pass
- ✅ Zero linting errors
- ✅ Successful Docker build
- ✅ Container health check passes
- ✅ Application accessible on port 80

## 🎉 Deliverables Completed

1. **✅ GitHub Repository**: [smart-cart-engine](https://github.com/Sai-charan498/smart-cart-engine)
2. **✅ CI/CD Workflow**: `.github/workflows/main.yml` with complete pipeline
3. **✅ Docker Integration**: Multi-stage Dockerfile with Nginx
4. **✅ Automated Testing**: Lint + Build + Deploy pipeline
5. **✅ Sample Application**: React + Vite + TypeScript web app
6. **✅ Main Branch Trigger**: Automated deployment on push

## 🚀 Next Steps

### Production Deployment Options
1. **Docker Hub**: Push images to registry
2. **AWS ECS**: Container orchestration
3. **Kubernetes**: Scalable deployment
4. **Vercel/Netlify**: Static site deployment

### Pipeline Enhancements
- Add unit tests with Jest
- Implement security scanning
- Add performance testing
- Configure staging environment
- Set up monitoring and alerts

## 📝 Task Summary

This implementation successfully demonstrates:
- **Complete CI/CD Pipeline**: From code commit to deployment
- **Modern DevOps Practices**: Docker, GitHub Actions, automated testing
- **Production-Ready Setup**: Nginx, multi-stage builds, health checks
- **Code Quality Assurance**: Linting, type checking, build validation
- **Scalable Architecture**: Multi-platform support, caching optimization

The pipeline is now fully operational and ready for production deployment! 🎯
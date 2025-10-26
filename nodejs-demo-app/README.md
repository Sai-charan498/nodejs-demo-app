# nodejs-demo-app

A simple Node.js Express application with CI/CD pipeline using GitHub Actions.

## Features

- **Express.js** REST API server
- **Docker** containerization with multi-stage builds
- **GitHub Actions** CI/CD pipeline
- **Jest** testing framework
- **ESLint** code quality checks
- **Health check** endpoints
- **CORS** and security middleware

## Quick Start

### Prerequisites
- Node.js 18+
- Docker (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/Sai-charan498/nodejs-demo-app.git
cd nodejs-demo-app

# Install dependencies
npm install

# Start development server
npm run dev

# Or start production server
npm start
```

### API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

### Docker

```bash
# Build Docker image
docker build -t nodejs-demo-app .

# Run container
docker run -p 3000:3000 nodejs-demo-app
```

### Testing

```bash
# Run tests
npm test

# Run linter
npm run lint
```

## CI/CD Pipeline

The application includes a complete GitHub Actions pipeline that:

1. **Tests** - Runs ESLint and Jest tests
2. **Builds** - Creates Docker image
3. **Deploys** - Tests deployment and health checks

Pipeline triggers on:
- Push to `main` branch
- Pull requests to `main` branch

## Project Structure

```
nodejs-demo-app/
├── .github/workflows/
│   └── ci-cd.yml          # GitHub Actions pipeline
├── src/
│   └── index.js           # Main application file
├── test/
│   └── app.test.js        # Test suite
├── Dockerfile             # Docker configuration
├── package.json           # Dependencies and scripts
├── .eslintrc.js          # ESLint configuration
└── README.md             # This file
```

## License

MIT
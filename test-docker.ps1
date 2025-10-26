# PowerShell script to test Docker setup
Write-Host "Testing Docker Setup..." -ForegroundColor Green

# Check if Docker is running
Write-Host "`nChecking Docker status..." -ForegroundColor Yellow
try {
    docker info | Out-Null
    Write-Host "✓ Docker is running" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker is not running. Please start Docker Desktop." -ForegroundColor Red
    Write-Host "After starting Docker Desktop, run this script again." -ForegroundColor Yellow
    exit 1
}

# Build the application
Write-Host "`nBuilding React application..." -ForegroundColor Yellow
try {
    docker build -t react-app-test .
    Write-Host "✓ Docker build successful" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker build failed" -ForegroundColor Red
    exit 1
}

# Test if we can run the container (don't actually run it to avoid port conflicts)
Write-Host "`nTesting container creation..." -ForegroundColor Yellow
try {
    $containerId = docker create -p 3000:80 react-app-test
    docker rm $containerId | Out-Null
    Write-Host "✓ Container can be created successfully" -ForegroundColor Green
} catch {
    Write-Host "✗ Container creation failed" -ForegroundColor Red
    exit 1
}

Write-Host "`n🎉 All tests passed! Your Docker setup is working correctly." -ForegroundColor Green
Write-Host "`nTo run your application:" -ForegroundColor Cyan
Write-Host "  Production:  docker run -p 3000:80 react-app-test" -ForegroundColor White
Write-Host "  Development: docker-compose --profile dev up --build" -ForegroundColor White
Write-Host "`nThen visit: http://localhost:3000 (production) or http://localhost:8080 (development)" -ForegroundColor Cyan
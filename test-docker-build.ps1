# Test Docker Build Script
Write-Host "🧪 Testing Docker build locally..." -ForegroundColor Green

# Navigate to nodejs-demo-app directory
Set-Location nodejs-demo-app

# Build Docker image
Write-Host "Building Docker image..." -ForegroundColor Yellow
docker build -t test-nodejs-demo-app:latest .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker build successful!" -ForegroundColor Green
    
    # Test run the container
    Write-Host "Testing container..." -ForegroundColor Yellow
    docker run -d -p 3001:3000 --name test-container test-nodejs-demo-app:latest
    
    Start-Sleep -Seconds 10
    
    # Test endpoints
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3001/health" -UseBasicParsing
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ Health endpoint working!" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "❌ Health endpoint failed: $_" -ForegroundColor Red
    }
    
    # Cleanup
    docker stop test-container
    docker rm test-container
    docker rmi test-nodejs-demo-app:latest
    
    Write-Host "🎉 Local test completed!" -ForegroundColor Green
} else {
    Write-Host "❌ Docker build failed!" -ForegroundColor Red
}

# Return to original directory
Set-Location ..
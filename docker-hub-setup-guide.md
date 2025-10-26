# Docker Hub Setup Troubleshooting Guide

## Method 1: GitHub Web Interface (Primary)

### Step-by-Step Screenshots Guide:

1. **Go to Repository Settings**
   - URL: https://github.com/Sai-charan498/nodejs-demo-app/settings
   - Look for "Settings" tab (next to "Insights")

2. **Navigate to Secrets**
   - Left sidebar → "Security" section
   - Click "Secrets and variables"
   - Click "Actions"

3. **Add Secrets**
   - Click "New repository secret"
   - Add these exact secrets:

   **Secret 1:**
   ```
   Name: DOCKER_HUB_USERNAME
   Value: [your-docker-hub-username]
   ```

   **Secret 2:**
   ```
   Name: DOCKER_HUB_ACCESS_TOKEN
   Value: [your-docker-hub-access-token]
   ```

## Method 2: Alternative Workflow (If Secrets Don't Work)

If you can't add secrets through GitHub UI, you can:

1. **Fork the repository** to your personal account
2. **Add secrets to the forked repository**
3. **Create a pull request** back to the original

## Method 3: Local Docker Hub Push (Manual)

If GitHub Actions isn't working, you can manually push to Docker Hub:

```bash
# Build the image
docker build -t your-username/nodejs-demo-app:latest ./nodejs-demo-app

# Login to Docker Hub
docker login

# Push to Docker Hub
docker push your-username/nodejs-demo-app:latest
```

## Verification Steps

After adding secrets, verify they exist:
1. Go to repository Settings → Secrets and variables → Actions
2. You should see:
   - ✅ DOCKER_HUB_USERNAME
   - ✅ DOCKER_HUB_ACCESS_TOKEN

## Common Error Messages & Solutions

### "Error: Username or password incorrect"
- Double-check your Docker Hub username
- Regenerate the access token
- Ensure token has "Read, Write, Delete" permissions

### "Error: Repository does not exist"
- The Docker Hub repository is created automatically on first push
- Make sure your username is correct in the workflow

### "Error: Access denied"
- Check if your access token has expired
- Verify token permissions include "Write" access

## Testing the Setup

1. Make any small change to your code
2. Commit and push to main branch
3. Check GitHub Actions tab for pipeline status
4. Look for your image at: https://hub.docker.com/r/[username]/nodejs-demo-app

## Contact Support

If none of these methods work:
1. Check GitHub Status: https://www.githubstatus.com/
2. Check Docker Hub Status: https://status.docker.com/
3. Try again in a few minutes (sometimes it's a temporary issue)
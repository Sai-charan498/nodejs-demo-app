# Design Document

## Overview

This design addresses the npm dependency synchronization issues by systematically regenerating lock files, cleaning up dependency conflicts, and ensuring proper package management across both the React application and Node.js demo application. The approach prioritizes maintaining functionality while resolving CI/CD pipeline failures.

## Architecture

The fixes will be applied to three main areas:
1. **Lock File Regeneration** - Remove and recreate package-lock.json files to sync with package.json
2. **Dependency Cleanup** - Remove conflicting packages and ensure proper separation between applications
3. **CI/CD Pipeline Updates** - Modify workflows to handle dependency installation correctly

## Components and Interfaces

### Root Application (React/Vite)
- **Current Issue**: Main package-lock.json contains references to Node.js app dependencies
- **Solution**: Clean separation of dependencies, regenerate lock file for React app only
- **Affected Files**: 
  - `package.json` (root)
  - `package-lock.json` (root)

### Node.js Demo Application
- **Current Issue**: Missing package-lock.json and version mismatches
- **Solution**: Generate dedicated lock file, update dependency versions
- **Affected Files**:
  - `nodejs-demo-app/package.json`
  - `nodejs-demo-app/package-lock.json` (to be created)

### CI/CD Pipeline Configuration
- **Current Issue**: npm ci fails due to lock file sync issues
- **Solution Strategy**: 
  - Update workflow to handle both applications separately
  - Use appropriate npm commands for each context
  - Add proper working directory specifications
- **Affected Files**:
  - `.github/workflows/main.yml`

## Data Models

### Dependency Structure
- **Root Dependencies**: React, Vite, TypeScript, and UI component libraries
- **Node App Dependencies**: Express, testing frameworks, and Node.js specific tools
- **Shared Dependencies**: ESLint configuration (handled separately in each app)

### Version Constraints
- **Node.js Version**: Align both applications to use compatible Node.js versions
- **Package Versions**: Ensure no conflicting versions between applications
- **Lock File Format**: Use npm lockfileVersion 2 or 3 for consistency

## Error Handling

- **Missing Dependencies**: Regenerate lock files to include all required packages
- **Version Conflicts**: Use npm install to resolve and lock compatible versions
- **CI Pipeline Failures**: Implement proper error handling and retry mechanisms
- **Workspace Isolation**: Ensure each application manages its own dependencies

## Testing Strategy

- **Local Validation**: Test npm ci in both root and nodejs-demo-app directories
- **CI Pipeline Testing**: Verify workflow runs successfully after changes
- **Dependency Audit**: Run npm audit to check for security vulnerabilities
- **Build Verification**: Ensure both applications build successfully after dependency fixes
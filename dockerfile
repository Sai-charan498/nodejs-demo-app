# Use an official Node LTS runtime
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json first to leverage Docker cache
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

# Expose the port and run
ENV PORT=3000
EXPOSE 3000
CMD ["node", "src/index.js"]

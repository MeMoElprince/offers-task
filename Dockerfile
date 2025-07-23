# Use the Node.js v22.7.0 image as the base
FROM node:22.7.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the TypeScript project
RUN npm run build

# Run the app
CMD ["node", "dist/app.js"]

# Expose the port
EXPOSE 3000

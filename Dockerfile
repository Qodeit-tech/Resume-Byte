# Production stage
FROM node:16-alpine AS production

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the desired port
EXPOSE 7000

# Set the entry point command to start the application
CMD [ "node", "server.js" ]




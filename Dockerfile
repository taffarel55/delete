# ==== CONFIGURE =====

# Use a Node base image
FROM node:18-alpine

# Set the working directory to /usr/src/app inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./


# ==== INSTALL =====
# Install dependencies
RUN npm install --only=production
# Copy files after install dependencies
COPY . .

# ==== RUN =======

# Expose the port on which the app will be running
EXPOSE 1234

# Start the app
CMD ["npm", "run", "start"]

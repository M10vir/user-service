# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app runs on (e.g., 3000 for Node.js)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]


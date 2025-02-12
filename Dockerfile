# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json .
RUN npm install

# Copy the rest of the application
COPY backend ./backend
COPY frontend ./frontend

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start", "--prefix", "backend"]

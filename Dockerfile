# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Set the working directory in the container
COPY package*.json ./

# Copy the rest of the application code to the container
COPY . ./

# Install dependencies
RUN npm -y install

# Expose the port your app runs on (optional)
EXPOSE 3000

# Specify the default command to run when the container starts
CMD ["npm", "start"]


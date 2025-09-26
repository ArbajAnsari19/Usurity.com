# Stage 1: Build the React application using NPM
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and the package-lock.json file
COPY package*.json ./

# Install dependencies using NPM.
# The --legacy-peer-deps flag helps resolve older dependency conflicts.
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY . .

# Accept the API URL as a build argument
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build the static files
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


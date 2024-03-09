# Dockerfile

- Dockerfile is used to spin a single container

```sh
FROM ubuntu:latest
RUN echo "hello world"
CMD ["echo", "hello world"]
port 80
```

```sh
# Use the official Node.js image as the base image
FROM node:16

# Set the NODE_ENV environment variable to production
ENV NODE_ENV=production

# Create a working directory /app in the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files to the image
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run the app
CMD ["node", "src/index.js"]
```

- `ADD`: copies the files from a source on the host into the container’s own filesystem at the set destination.
- `CMD`: can be used for executing a specific command within the container.
- `ENTRYPOINT`: sets a default application to be used every time a container is created with the image.
- `EXPOSE`: tells container to listen on specific port internally but does not actually publish the port.

```sh
EXPOSE 80

```

```sh
docker run -p 80:80 <image>
```

- `FROM`: defines the base image used to start the build process.
- `MAINTAINER`: defines a full name and email address of the image creator.
- `USER`: sets the UID (or username) which is to run the container.
- `VOLUME`: is used to enable access from the container to a directory on the host machine.
- `WORKDIR`: sets the path where the command, defined with CMD, is to be executed.

## RUN vs CMD

- RUN
  - creates an intermediate layer each time the command is executed.
  - run only when building the image
  - preferred for installing packages once and doing updates when building the final image where the app will be run
  - advise to put them togeher
- CMD
  - runs everytime a container is spun up
  - no intermediate layer. the image is not changed

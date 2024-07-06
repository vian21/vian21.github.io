# Docker

```bash
#pull image from hub
docker pull ubuntu:latest

#run image to create a container
docker run -it ubuntu:latest /bin/bash ## -it = interactive terminal

#list all images
docker images

#remove image
docker rmi ubuntu:latest

#list all containers
docker ps -a

#remove container
docker rm [container id]

# stop container
docker stop [container id]

# resource usage
docker stats [container id]

# run shell in container
docker attach [container id]


```

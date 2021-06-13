# Docker basics

## Description
[Docker basics](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/docker-basics.md)

## Prerequisites
- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://docs.docker.com/engine/install/)
- Create [Docker Hub](https://hub.docker.com/) account

## Installation instructions
### Clone repository
In the CLI, run this command to get files from this repository:
````
git clone https://github.com/alpoliakov/2021Q2-nodejs
````

### Go to directory

After cloning is complete, open the directory containing the app:
````
cd 2021Q2-nodejs
````
and go to the branch ````task-6````
````
git checkout task-6
````
### Create a ```.env``` file

In the root of the project, you need to create a **```.env```** file and register the following global variables in it:
```
NODE_ENV=development
PORT=4000
AUTH_MODE=false

POSTGRES_PORT=5432
POSTGRES_USER=<your postgres user name>
POSTGRES_PASSWORD=<your postgres password>
POSTGRES_DB=<your postgres db name>
```

## Run services

To run all services use:
```
docker-compose up
```

For run it in background, use **```-d```** flag

After starting the app on port (4000 as default) you can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
(For more information about OpenAPI/Swagger please visit https://swagger.io/.)
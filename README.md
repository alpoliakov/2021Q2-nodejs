# RS School REST service

## Task 5 (Logging & Error Handling)
[Logging & Error Handling description & instructions](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/logging-error-handling.md)

## Task 6 (Docker basics)
[Docker basics - description & instructions](https://github.com/alpoliakov/2021Q2-nodejs/blob/task-6/TASK-6.md)

### Installation instructions
#### Clone repository
In the CLI, run this command to get files from this repository:
````
git clone https://github.com/alpoliakov/2021Q2-nodejs
````

#### Go to directory

After cloning is complete, open the directory containing the app:
````
cd 2021Q2-nodejs
````
and go to the branch ````task-6````
````
git checkout task-6
````
#### Create a ```.env``` file

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

### Run services

To run all services use:
```
docker-compose up
```

For run it in background, use **```-d```** flag

After starting the app on port (4000 as default) you can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
(For more information about OpenAPI/Swagger please visit https://swagger.io/.)


### Stop services

To stop services use:
```
docker-compose stop
```

### My Docker Hub repo

Link to my **Docker Hub** repository: https://hub.docker.com/u/alpoliakov


## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

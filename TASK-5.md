# Logging & Error Handling

#### Add logging functionality to already existing REST service.
     
## Description
**Logging & Error Handling**
[Implementation - Description and instructions](https://github.com/alpoliakov/2021Q2-nodejs/blob/task-5/TASK-5.md)

## Prerequisites
- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

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
and go to the branch ````task-5````
````
git checkout task-5
````
### Install dependencies
````
npm i
````
or
````
npm install
````

## Usage

### Running application
***
**(Before starting, make sure that you are in the ````2021Q2-nodejs```` directory and your branch is ````task-2````, and that all dependencies are installed)**
***
In the CLI, run commands:

````
npm start
````

After starting the app on port (4000 as default) you can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
(For more information about OpenAPI/Swagger please visit https://swagger.io/.)

### Running tests
After application running open new terminal.
***
**(Before starting, make sure that you are in the ````2021Q2-nodejs```` directory.)**
***
To run all tests without authorization:
````
npm test
````

## Logging

**N.B.** The logging process is carried out by a single module: **````lib/logger.ts````**. 
The module itself is reused several times, for example, for logging: **````utils/logMiddleware.ts````** and catching errors: **````errors/handlerError.ts````**.

After you make your requests, a **````logs````** directory will be created in the **````src````** directory, where **````all.log````** and **````errors.log````** files will be placed.
All logs for your requests will be in the **````all.log````** file.

Logging is done using middleware: **````utils/logMiddleware.ts````**.

## Error Handling

Error handling is done centrally using middleware: **````errors/handlerError.ts````**.
Error handling ````uncaughtException```` и ````unhandledRejection```` is located in the file: **````src/server.ts````**.

Error logs are written to a separate file **````logs/errors.log````**, and are also duplicated by output to the console.

### uncaughtException & unhandledRejection

To test the catching and logging of the **```uncaughtException```** error, uncomment the code on line 23-25 in the **```app.тс```** file.
To test the catching and logging of the **```unhandledRejection```** error, uncomment the code on line 28 in the **```app.тс```** file.

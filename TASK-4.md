# Typescript basics
#### The assignment consists of two parts:
- Supplement custom functions in **JSDoc** code with comments
- Migrate from **Javascript** to **Typescript**

## Description
[Typescript basics](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/typescript-basics.md)

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
and go to the branch ````task-4-5````
````
git checkout task-4-5
````
### Install dependencies
````
npm i
````
or
````
npm install
````

## Part 1 
- (Supplement custom functions in **JSDoc** code with comments)

In the cloned repository, in the **Releases** section (to the right of the main section), find **1 tags** and go to this tag by clicking on it with the left mouse button.

![image](https://user-images.githubusercontent.com/27024108/120101905-31fb5a00-c151-11eb-81ad-d61818d0c4af.png)

By going to the tag, you can download the application in **````zip````** or **````tar.gz````** format and open it in your **IDE**.

**or**

You can move in the downloaded application to commit:
````
git checkout 45e20520bb8e2ae1347652cc9c349cfdec2ae601
````

return:
````
git checkout
````

The release already has a folder with **JSDock**: **````docs````** - but you can delete it and create a new one using the command:
````
npm run doc
````

Go to the **````docs````** folder and find the **````index.html````** file and from your IDE open it in your browser.
You can also see the description in the code itself.

## Part 2.
- (Migrate from **Javascript** to **Typescript**)

**(Before starting, make sure that you are in the ````2021Q2-nodejs```` directory and your branch is ````task-4-5````, and that all dependencies are installed)**

### Running application

In the CLI, run commands:
````
npm start
````
After starting the app on port (8080 as default) you can open in your browser OpenAPI documentation by typing http://localhost:8080/doc/.
(For more information about OpenAPI/Swagger please visit https://swagger.io/.)

To compile files **.ts** to **.js**, you can run the command:
````
npm run build
````

A **````build````** folder will be created in the root of the project, where the compiled files will be located.

To check if the compilation is correct, run the command:
````
nodemon build/server.js
````

### Running tests
**(Before starting, make sure that you are in the ````2021Q2-nodejs```` directory.)**

After application running open new terminal and:

to run all tests without authorization:
````
npm run test
````

To run a linter based on a local config:
````
npm run lint
````

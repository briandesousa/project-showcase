# Project Showcase

Simple project showcase website.

[![buddy pipeline](https://app.buddy.works/briandesousa1/samplewebapp-buddy/pipelines/pipeline/255599/badge.svg?token=741036267ec8aec96453b02770d01b4fdbc8ca22107f9384367d2d74390e9cb2 "buddy pipeline")](https://app.buddy.works/briandesousa1/samplewebapp-buddy/pipelines/pipeline/255599)


[generated facvicon](https://favicon.io/favicon-generator/?t=PS&ff=Just+Me+Again+Down+Here&fs=110&fc=%23FFFFFF&b=rounded&bc=%23209CEE)

## Tech stack

* React frontend and Express backend
* Node.js 14
* Docker
* Buddy CI/CD 

## Usage

You can build, test and run the application outside of the Docker container:

* `npm test` to launch the test runner in the interactive watch mode to test the React UI
* `npm run build` to build the React UI layer for production to the `build` folder
* `npm run eject` to remove the single React build dependency and copy all config files and transitive dependnecies so you have full control
* `node server.js` to run the Express backend API at [http://localhost:3001](http://localhost:3001)
* `npm start` to run the React front-end UI at [http://localhost:3000](http://localhost:3000)

You can build and run the application within a Docker container:

1. `docker build . --tag projectshowcase:1.0.0` to build an image
2. `docker run -d -p 8080:8080 --name ps projectshowcase:1.0.0` to create a new container from the image
3. Access the UI at [http://localhost:8080](http://localhost:8080)
4. `docker exec -it ps bash` to open a bash shell on the running container

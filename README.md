# ThoughtSpot Everywhere Fundamentals for Developers

This repository contains the training content for the ThoughtSpot Everywhere Fundamentals for Developers course.

File and folder structure:

* index.html - the main html file
* `./js` - contains the javascript for the application.
* `./js/tse.js` - the main javascript file for the application.
* `./css` - contains the css for the application.
* `./css/tse.css` - the main css file for the application.
* `./img` - contains the images for the application.

## Running the application in CodeSandbox

To run in code sandbox, you need to have `serve` installed.  You can test if it's installed by running `npx serve --help` in the terminal to see if it's found.  If not, you can install it by running `npm install serve`.  Once installed, run `npx serve -l 8000`, which starts the server running on port 8000.

## Running the application locally

This is a web application and will need to be deployed to a web server to run.  If you want to test locally, you can use something simple like the [Python http.server](https://docs.python.org/3/library/http.server.html):  `python3 -m http.server <port>`.  Simply run that command from the root folder (where `index.html` exists).  

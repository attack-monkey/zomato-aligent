# Install & Run

- This project relies on npm. This will need to be installed before moving forward.
- Once npm is installed...
- Unzip the project
- Boot up the server side project...
    - `cd` into the server dir
    - Ensure that you create a `zomato-api-key.const.js` file in the root of the server dir

    _Add your api key into the file you just created_

    ```javascript

    // Note: this is my real api key for a basic account...
    // Normally I wouldn't commit this to source - but for simplicity sake, here it is...

    module.exports = '00eb7c42ec7ccf5f9188a5792fd05afb';

    ```

    - `npm install` - Install the project's dependencies
    - `npm start` - will boot up a node.js server on localhost:3000
    
- Boot up the client side project...
    - `cd` into the client dir
    - `npm install -g parcel-bundler` - This is the bundler that will compile the project
    - `npm install` - Install the project's dependencies.
    - `npm start` - will boot up the app on localhost:1234

# Understanding the Project

## Features

- Uses React-Fn framework, which is a micro framework around React that promotes a functional approach, but as an
alternative to Redux.
- Default map of cuisines and categories allows instant load, but is then verified once the real api calls are returned.
- Server side app layer provides a cache to reduce api calls and protect api key.

## Client side

The client-side app uses React-Fn. A functional approach to React that I built as an alternative to Redux style actions. _A similar approach to something like Hyperapp_.

The Project running on local is expected to be run with parcel.js. Parcel is a zero config approach to bundling as opposed to webpack which can require quite a lot of config to get it working correctly.

The project is written in typescript. While the project is quite functional, types and interfaces help especially with code completion and linting.

## Server side

The Serverside is a basic node.js express app.

There are 2 main reasons for having a server-side part to the project.  
Firstly it hides the api-key away from the client-side, so other parties cannot use the api with this key.  
Secondly it allows the ability to add a caching layer. Since categories and cuisines is likely to be 
relatively stable, it makes good sense to have a cache to speed things up and reduce calls.

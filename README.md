# Install

- This project relies on npm. This will need to be installed before moving forward.
- Once npm is installed...
- Boot up the server side project...
    - `cd` into the server dir
    - Ensure that you create a zomato-api-key.const.js file in the root of the server dir

    _Add your api key into the file you just created_
    ```javascript

    // eg.

    module.exports = 'abc123';

    ```

    - `npm install` - Install the project's dependencies
    - `npm start` - will boot up a node.js server on localhost:3000
    
- Boot up the client side project...
    - `cd` into the client dir
    - `npm install -g parcel-bundler` - This is the bundler that will compile the project
    - `npm install` - Install the project's dependencies.
    - `npm start` - will boot up the app on localhost:1234

# Run
- `cd` into the client folder and into the server folder.
- `npm start` - first in the server project, and then in the client project.

# Understanding the Project

## Client side

The client-side app uses React-Fn. A functional approach to React that I built as an alternative to Redux style actions. _A similar approach to something like Hyperapp_.

The Project running on local is expected to be run with parcel.js.

The project is written in typescript.

## Server side

The Serverside is a basic node.js express app.
This is really just emulating a server for connecting to the zomato api without having to expose the api key

## Server side
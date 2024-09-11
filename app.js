// Load environment variables from a .env file into `process.env`
require("dotenv").config();

// Import the Express framework, which is used to build web applications in Node.js
const express = require("express");

// Import the function to connect to the database, defined in a separate file (config/db)
const connectToDb = require("./config/db");

// Import CORS middleware to enable Cross-Origin Resource Sharing
const cors = require("cors");

// Create an instance of an Express application
const app = express();

// Express middleware:
// Use CORS to allow requests from other origins (e.g., from a frontend running on a different domain)
app.use(cors());

// Middleware to parse incoming JSON requests and make the data available in `req.body`
app.use(express.json());

// Middleware to parse incoming URL-encoded form data and make it available in `req.body`
app.use(express.urlencoded({ extended: true }));

// Initialize the connection to the database by calling the function imported earlier
connectToDb();

// Import the user-related routes defined in a separate file (routes/userRoutes)
const userRouter = require("./routes/userRoutes");

// Register the imported user routes with the Express application
// This means that all routes defined in `userRouter` will be available in the app
app.use(userRouter);

// Export the app object, so it can be used in other files (like to start the server)
module.exports = app;

/**
 * Configures
 * Detailed Explanation
    1. Environment Variables (require("dotenv").config();):
        This line loads environment variables from a .env file into process.env.
        Environment variables are often used to store sensitive information like database credentials or API keys that should not be hard-coded into your application.

    2. Express Setup (const express = require("express");):
        Express is a popular web framework for Node.js, which simplifies the process of creating web servers and handling HTTP requests and responses.
        const app = express(); creates an instance of the Express application that will be used to define routes and handle incoming requests.

    3. Database Connection (connectToDb();):
        connectToDb is a function imported from another file that initializes a connection to a database (like MongoDB).
        This function is called to ensure that the app can communicate with the database as soon as it starts.

    4. Middleware (app.use(...)):
        * CORS (app.use(cors());):
            CORS (Cross-Origin Resource Sharing) is a security feature that allows your server to accept requests from other origins (domains). By default, web browsers restrict such cross-origin HTTP requests.
        * JSON Parser (app.use(express.json());):
            This middleware parses incoming requests with JSON payloads and makes the data available in req.body. It's essential when working with APIs that accept JSON data.
        * URL-Encoded Parser (app.use(express.urlencoded({ extended: true }));):
            This middleware parses incoming requests with URL-encoded payloads (like form submissions) and makes the data available in req.body.
            The extended: true option allows for parsing complex objects and arrays.

    5. Routes (const userRouter = require("./routes/userRoutes"); and app.use(userRouter);):
        userRouter is imported from a separate file (userRoutes.js). This file likely defines various routes (endpoints) related to user operations, such as creating a user, logging in, or updating user information.
        app.use(userRouter); registers these routes with the Express app, making them available to handle incoming requests.

    6. Exporting the App (module.exports = app;):
        The app is exported so that it can be used in other files, such as a file that starts the server (usually index.js or server.js).

  *In Summary
    This code sets up an Express.js application that:

    1. Loads environment variables.
    2. Connects to a database.
    3. Uses middleware for JSON and form data parsing, as well as CORS.
    4. Imports and uses routes defined in another file to handle user-related HTTP requests.
 */

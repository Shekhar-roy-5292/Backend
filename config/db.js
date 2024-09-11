// Import the mongoose library. Mongoose provides a higher-level abstraction for interacting with MongoDB.
const mongoose = require("mongoose");

// Define an asynchronous function named connectToDb. This function will handle connecting to the MongoDB database.
const connectToDb = async () => {
  // Attempt to establish a connection to the MongoDB database.
  // process.env.MONGO_URI is an environment variable containing the MongoDB connection string.
  mongoose
    .connect(process.env.MONGO_URI)
    // The connect method returns a promise. If the connection is successful, the following .then() block executes.
    .then((conn) => {
      // `conn` is the connection object returned by Mongoose. We use it to access connection details.
      // Log a success message to the console. `conn.connection.host` gives us the hostname of the connected MongoDB server.
      console.log(`Connected to DB: ${conn.connection.host}`);
    })
    // If the connection attempt fails, the .catch() block will execute. `err` is the error object containing details of the failure.
    .catch((err) => {
      // Log the error to the console to help with debugging. It provides information about why the connection failed.
      console.log(err);
      // Exit the process with a status code of 1 to indicate that the application encountered an error and could not start correctly.
      // This prevents the application from running in an unstable state.
      process.exit(1);
    });
};

// Export the connectToDb function so that it can be imported and used in other parts of the application.
// This is useful for separating concerns and keeping your code modular.
module.exports = connectToDb;

/**
 * Detailed Breakdown:

    1. const mongoose = require("mongoose");
        Purpose: Imports the Mongoose library into your file so you can use it to interact with MongoDB.
        Why: Mongoose simplifies working with MongoDB by providing a schema-based solution to model your data.

    2. const connectToDb = async () => {
        Purpose: Defines an asynchronous function named connectToDb.
        Why: Using async allows you to use await inside this function, which is useful for handling asynchronous operations like database connections.

    3. mongoose.connect(process.env.MONGO_URI)
        Purpose: Starts the process of connecting to MongoDB using the connection string stored in the environment variable MONGO_URI.
        Why: process.env.MONGO_URI contains sensitive information (like database credentials) and is used to specify which MongoDB instance to connect to.

    4. .then((conn) => {
        Purpose: Handles the successful connection scenario. The .then() method is called if the connection is established without errors.
        Why: It allows you to perform actions once the connection is successful, such as logging a confirmation message.

    5. console.log(Connected to DB: ${conn.connection.host});
        Purpose: Logs a success message to the console, including the host of the connected MongoDB server.
        Why: This provides feedback that the connection was successful and can help with debugging and verification.

    6. }).catch((err) => {
        Purpose: Handles errors that occur during the connection attempt. The .catch() method is executed if there’s an issue with connecting to the database.
        Why: It allows you to handle and respond to errors appropriately, such as by logging the error and exiting the application.

    7. console.log(err);
        Purpose: Logs the error message to the console.
        Why: Provides details about what went wrong, which is crucial for debugging and fixing connection issues.

    8. process.exit(1);
        Purpose: Exits the Node.js process with a status code of 1.
        Why: Indicates that the process ended with an error. This is important for signaling that the application failed to start correctly, which is especially useful in production environments to avoid running the app in an unstable state.

    9. };
        Purpose: Closes the connectToDb function definition.
        Why: Marks the end of the function’s code block.

    10. module.exports = connectToDb;
        Purpose: Exports the connectToDb function from this module.
        Why: Allows other files in your application to import and use this function, promoting modularity and separation of concerns.
 */

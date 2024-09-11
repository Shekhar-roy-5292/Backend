// Import the Express application instance from another file (app.js)
const app = require("./app.js");

// Set the port number where the server will listen for incoming requests
// It gets the port number from the environment variables (usually defined in a .env file)
const PORT = process.env.PORT;

// Start the Express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // This callback function runs when the server successfully starts
  console.log(`Server listening on port http://localhost:${PORT}...`);
});

/**
 * Detailed Explanation

    1. Importing the Express Application (const app = require("./app.js");):
        The Express app, which is defined and exported in the app.js file, is imported here.
        This file (index.js or server.js) is typically the entry point of the application that actually starts the server.

    2. Setting the Port (const PORT = process.env.PORT;):
        * The PORT variable is set to the value of process.env.PORT. This value is usually defined in an environment file (.env) or provided by the hosting environment (like Heroku, AWS, etc.).
        * Using process.env.PORT allows flexibility in choosing a port number dynamically, which is particularly useful for deployment in different environments. For local development, you might define it in a .env file, like:

        * makefile
                PORT=3000

    3. Starting the Server (app.listen(PORT, ...)):
      * app.listen(PORT, ...) starts the server and makes it listen for incoming HTTP requests on the specified port (PORT).
      * The listen method takes two arguments:
        ** Port Number: PORT specifies on which port the server will listen for requests.
        ** Callback Function: The function that gets executed once the server starts successfully.
        ** The console.log statement inside the callback prints a message to the console indicating that the server is running and listening on the specified port.

    4. Console Output (console.log):
      * The console.log statement provides feedback that the server has started successfully. It displays a message like:

      * arduino
                Server listening on port http://localhost:3000...

      * This message helps the developer know that the server is running and can be accessed at http://localhost:PORT.

  * In Summary

    ** This code snippet is the main entry point of your Node.js application. It imports the configured Express app and starts the server on a specific port. This setup ensures the server is running and listening for incoming HTTP requests on the specified port (PORT), enabling the app to handle web traffic.
 */

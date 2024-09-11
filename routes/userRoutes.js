const express = require("express");
const {
  home,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Initialize an Express router instance to define routes
const router = express.Router();

// Define the route for the home page
router.get("/", home); // Handles GET requests to the root URL ("/"), calls the 'home' function from the userController

// Define the route to get all users
router.get("/getUsers", getUsers); // Handles GET requests to "/getUsers", calls the 'getUsers' function from the userController

// Define the route to create a new user
router.post("/createUser", createUser); // Handles POST requests to "/createUser", calls the 'createUser' function from the userController

// Define the route to delete a user by ID
router.delete("/deleteUser/:id", deleteUser); // Handles DELETE requests to "/deleteUser/:id", calls the 'deleteUser' function from the userController

// Define the route to update a user by ID
router.put("/updateUser/:id", updateUser); // Handles PUT requests to "/updateUser/:id", calls the 'updateUser' function from the userController

// Export the router so it can be used in other parts of the application
module.exports = router;

/**
 * Detailed Explanation

    1. Require Express and User Controllers:
        * express is required to create a router instance, which is used to define all routes related to users.
        * The user-related functions (home, createUser, getUsers, deleteUser, updateUser) are imported from the userController.js file. These functions handle the logic for each route.

    2. Initialize the Router:
        * express.Router() is a built-in method in Express that creates a new router object. Routers allow you to create modular, mountable route handlers.

    3. Define Routes:
        * router.get("/", home);
            * Sets up a route to handle GET requests to the root URL ("/"). When this route is hit, it calls the home function from the userController.
        * router.get("/getUsers", getUsers);
            * Sets up a route to handle GET requests to the /getUsers endpoint. It calls the getUsers function from the userController, which fetches all users from the database.
        * router.post("/createUser", createUser);
            * Sets up a route to handle POST requests to the /createUser endpoint. It calls the createUser function from the userController, which handles the creation of a new user.
        * router.delete("/deleteUser/:id", deleteUser);
            * Sets up a route to handle DELETE requests to the /deleteUser/:id endpoint. The :id is a route parameter that captures the user ID from the URL. It calls the deleteUser function from the userController, which deletes the user with the specified ID.
        * router.put("/updateUser/:id", updateUser);
            * Sets up a route to handle PUT requests to the /updateUser/:id endpoint. Similar to the delete route, :id captures the user ID from the URL. It calls the updateUser function from the userController, which updates the user data for the specified ID.

    4. Export the Router:
        * module.exports = router; exports the router object so it can be imported and used in other parts of the application, typically in the main app.js file.

 * Key Points to Remember

    * Router (express.Router()): A mini Express application without all the bells and whistles of a full Express app. It helps you create modular route handlers.
    * HTTP Methods:
        ** GET: Used to retrieve data (e.g., getUsers).
        ** POST: Used to create new data (e.g., createUser).
        ** DELETE: Used to delete existing data (e.g., deleteUser).
        ** PUT: Used to update existing data (e.g., updateUser).
    * Route Parameters: The :id in the routes (e.g., /deleteUser/:id) is a placeholder for the actual user ID that will be provided when making the request. It's a way to capture dynamic values from the URL.
    * Modular Code Structure: Separating routes into their own module (userRoutes.js) makes the code more organized and easier to maintain. The main app.js can then simply import this module and use it, keeping the core application setup clean.
 */

// Import the User model to interact with the database
const User = require("../models/userModel");

// A simple route handler that sends a "hello world" message
exports.home = (req, res) => {
  res.send("home, hello world");
};

// Controller function to create a new user
exports.createUser = async (req, res) => {
  let userExists; // To store whether the user already exists
  try {
    // Extract 'name' and 'email' from the request body
    const { name, email } = req.body;

    // Validate that both 'name' and 'email' are provided
    if (!email && !name) {
      throw new Error("Name and email are required");
    }

    // Check if a user with the same email already exists in the database
    userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User already exists"); // If user exists, throw an error
    }

    // Create a new user if not already existing
    const user = await User.create({ name: name, email: email });

    // Respond with success and the created user data
    res.status(201).json({
      user: user,
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    // Log the error and send a response with the error message
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      user: userExists ? userExists : "", // Include the existing user info if applicable
    });
  }
};

// Controller function to get all users
exports.getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({});
    if (users.length > 0) {
      res.status(200).json({
        users: users,
        message: "Users fetched successfully",
        success: true,
      });
    } else {
      res.status(200).json({
        users: [],
        message: "No users found",
        success: true,
      });
    }
  } catch (error) {
    // Log the error and send an error response
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Controller function to delete a user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract user ID from request parameters

    // Find the user by ID and delete
    const user = await User.findByIdAndDelete(userId);
    if (user) {
      res.status(200).json({
        user: user,
        message: "User deleted successfully",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
  } catch (error) {
    // Log the error and send an error response
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Controller function to update user data
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract user ID from request parameters

    // Find user by ID and update with new data from the request body
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (user) {
      res.status(200).json({
        user: user,
        message: "User updated successfully",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
  } catch (error) {
    // Log the error and send an error response
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Detailed Explanation

    1. Home Route (exports.home):
        A simple route handler that sends a "hello world" message when a user accesses the home route of the API.

    2. Create User (exports.createUser):
        * This function handles the creation of a new user.
        * Steps:
            * Extracts name and email from the request body.
            * Validates that both name and email are provided; if not, throws an error.
            * Checks if a user with the provided email already exists in the database.
            * If the user does not exist, it creates a new user and sends a success response.
            * If an error occurs (e.g., missing fields or the user already exists), it catches the error and sends an error response.

    3. Get Users (exports.getUsers):
        * This function fetches all users from the database.
        * Steps:
            * Retrieves all users using User.find({}).
            * If users are found, it sends a response with the list of users.
            * If no users are found, it sends a response indicating no users were found.
            * Catches and logs any errors, sending an error response if something goes wrong.

    4. Delete User (exports.deleteUser):
        * This function deletes a user by their ID.
        * Steps:
            * Extracts the user ID from the request parameters (req.params.id).
            * Finds and deletes the user by their ID using User.findByIdAndDelete(userId).
            * If the user is found and deleted, it sends a success response.
            * If the user is not found, it sends a "User not found" response.
            * Catches and logs any errors, sending an error response if something goes wrong.

    5. Update User (exports.updateUser):
        * This function updates user data by their ID.
        * Steps:
            * Extracts the user ID from the request parameters (req.params.id).
            * Finds and updates the user with the new data provided in the request body (req.body).
            * If the user is found and updated, it sends a success response.
            * If the user is not found, it sends a "User not found" response.
            * Catches and logs any errors, sending an error response if something goes wrong.

  * Key Points to Remember

    * Error Handling: The try-catch blocks help manage errors effectively, ensuring that if anything goes wrong (like a database error or missing data), the user receives a meaningful response.
    * Async/Await: Asynchronous JavaScript (async/await) is used to handle promises returned by MongoDB operations, making the code cleaner and easier to read.
    * Express.js Response Methods (res.send(), res.json(), res.status()): These methods are used to send responses back to the client.
        * res.json() sends a JSON response.
        * res.status() sets the HTTP status code of the response.
    * Mongoose Model Methods (User.findOne(), User.create(), User.findByIdAndDelete(), User.findByIdAndUpdate()): These methods interact with the MongoDB database using Mongoose to perform CRUD operations.
 */

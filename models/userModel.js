// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define a new schema for the 'User' collection
const userSchema = new mongoose.Schema({
  // Define the 'name' field with its properties
  name: {
    type: String, // The 'name' field is of type String
    required: [true, "Name must be provided"], // This field is required; if not provided, an error message is shown
    trim: true, // Automatically removes whitespace from both ends of the string
    maxLength: [20, "Name must be less than 20 characters"], // The maximum length allowed for the name is 20 characters
  },
  // Define the 'email' field with its properties
  email: {
    type: String, // The 'email' field is of type String
    required: [true, "email must be provided"], // This field is required; if not provided, an error message is shown
    unique: true, // The email must be unique; no two users can have the same email
  },
});

// Export the Mongoose model based on the 'userSchema' to be used in other parts of the application
module.exports = mongoose.model("User", userSchema);

/**
 * Detailed Explanation

    1. Import Mongoose (const mongoose = require('mongoose');):
        Mongoose is a popular Node.js library that provides a straightforward way to interact with MongoDB, a NoSQL database.
        By requiring mongoose, you can use it to define schemas and models to structure and manipulate data in MongoDB.

    2. Defining a Mongoose Schema (const userSchema = new mongoose.Schema({...});):
        A schema in Mongoose defines the structure of the documents within a MongoDB collection.
        The userSchema specifies the fields and validation rules for documents in the User collection.

    3. Schema Fields:
        name Field:
            type: String — The data type of the name field is a string.
            required: [true, 'Name must be provided'] — The name field is required, meaning it must be provided when creating a user. If not provided, the custom error message "Name must be provided" will be displayed.
            trim: true — Removes any whitespace from both ends of the string, ensuring no extra spaces are accidentally included in the name.
            maxLength: [20, 'Name must be less than 20 characters'] — Sets a maximum length of 20 characters for the name field. If the length exceeds 20 characters, the custom error message "Name must be less than 20 characters" will be shown.
        email Field:
            type: String — The data type of the email field is a string.
            required: [true, 'email must be provided'] — The email field is required, and if it is not provided, the custom error message "email must be provided" will be displayed.
            unique: true — Ensures that the email address is unique across all users in the User collection, meaning no two users can have the same email.

    4. Creating and Exporting the Model (module.exports = mongoose.model('User', userSchema);):
        The mongoose.model function creates a new model named 'User' based on the defined userSchema.
        The model provides an interface to interact with the corresponding User collection in MongoDB. It allows you to create, read, update, and delete (CRUD) user documents in the database.
        module.exports makes the User model available for use in other parts of the application, allowing other files to require it and perform operations on the User collection.

In Summary

This code defines a schema for a User in a MongoDB database using Mongoose. It specifies that each user document should have a name (with specific rules for validation) and a unique email. The model is then exported so that it can be used in other parts of the application to interact with the User data.
 */

# Express-MongoDB User Management API

This project is a simple RESTful API built with **Express.js** and **MongoDB** using **Mongoose**. The API allows you to manage user data by performing CRUD (Create, Read, Update, Delete) operations. 

## Features

- **Create User**: Add new users to the database.
- **Read Users**: Retrieve all users or a specific user by ID.
- **Update User**: Modify details of an existing user.
- **Delete User**: Remove a user from the database.
- **Error Handling**: Robust error handling for various operations.

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Cross-Origin Resource Sharing**: [cors](https://www.npmjs.com/package/cors)

## Project Structure

```plaintext
|-- config
|   |-- db.js               # Database connection configuration
|-- controllers
|   |-- userController.js   # Controller functions for handling user-related operations
|-- models
|   |-- userModel.js        # Mongoose schema and model for user
|-- routes
|   |-- userRoutes.js       # Routes for user-related endpoints
|-- .env                    # Environment variables
|-- app.js                  # Express application setup
|-- server.js               # Server setup and initialization
|-- package.json            # Project metadata and dependencies 
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download & Install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, but you can check the installation by running `npm -v`.
- **MongoDB**: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Shekhar-roy-5292/Backend.git
    cd Backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/your-db-name
    ```

4. Start the server:

    ```sh
    npm start
    ```

    The server will start at [http://localhost:5000](http://localhost:5000).

### Usage

#### API Endpoints

- `GET /` - Home route to test if the server is running.
- `GET /getUsers` - Retrieve all users.
- `POST /createUser` - Create a new user.
- `PUT /updateUser/:id` - Update an existing user by ID.
- `DELETE /deleteUser/:id` - Delete a user by ID.

#### Example Requests

- **Create a User:**

    ```http
    POST /createUser
    Content-Type: application/json

    {
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
    ```

- **Get All Users:**

    ```http
    GET /getUsers
    ```

### Code Explanation

- **`app.js`**: Sets up the Express application, initializes middleware for CORS, JSON body parsing, and URL-encoded form parsing. Connects to the database and sets up the user routes.
- **`server.js`**: Starts the server and listens on the specified port for incoming HTTP requests.
- **`db.js`**: Handles the connection to the MongoDB database using Mongoose.
- **`userModel.js`**: Defines a Mongoose schema and model for the user data. The schema includes fields for name and email with validation rules.
- **`userController.js`**: Contains controller functions:
  - `home`: Returns a welcome message.
  - `createUser`: Validates input, checks if a user already exists, creates a new user, and returns a response.
  - `getUsers`: Retrieves all users from the database.
  - `updateUser`: Updates user information based on ID.
  - `deleteUser`: Deletes a user from the database based on ID.
- **`userRoutes.js`**: Defines the routes and associates them with controller functions.

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Acknowledgments

- Thanks to Express.js for providing an excellent web framework.
- Thanks to MongoDB and Mongoose for their data management solutions.




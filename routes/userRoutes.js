const express = require("express");
const { home, createUser, getUsers, deleteUser, updateUser } = require("../controllers/userController");

// Routes setup
const router = express.Router();

// Home route
router.get("/", home);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

// Export the router
module.exports = router;

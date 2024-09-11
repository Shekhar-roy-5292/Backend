const express = require("express");
const { home, createUser } = require("../controllers/userController");

// Routes setup
const router = express.Router();

// Home route
router.get("/", home);
router.post("/createUser", createUser);

// Export the router
module.exports = router;

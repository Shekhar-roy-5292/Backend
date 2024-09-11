const User = require("../models/userModel");

// userController.js

exports.home = (req, res) => {
  res.send("home, hello world");
};

exports.createUser = async (req, res) => {
  try {
    //extract user
    const { name, email } = req.body;
    // create User
    const user = await User.create({ name: name, email: email });
    res.status(201).json({
      user: user,
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

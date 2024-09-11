const User = require("../models/userModel");

// userController.js

exports.home = (req, res) => {
  res.send("home, hello world");
};

exports.createUser = async (req, res) => {
  let userExists;
  try {
    //extract user
    const { name, email } = req.body;
    // validate email and name
    if (!email && !name) {
      throw new Error("Name and email are required");
      // return res.status(400).json({
      //   success: false,
      //   message: "Name and email are required",
      // });
    }
    userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User already exists");
    }
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
      success: false,
      message: error.message,
      user: userExists ? userExists : "",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
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
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
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
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    const user = await User.findByIdAndUpdate(userId, req.body);
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
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const cors = require("cors");
const app = express();

//Express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init connection to db
connectToDb();

//Routes
const userRouter = require("./routes/userRoutes");
app.use('/', userRouter)

module.exports = app;

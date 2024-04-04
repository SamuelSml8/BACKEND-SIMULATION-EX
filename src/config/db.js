const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samuel8:t4ImxkPNMXAhIrLt@users-nodejs.eyxgrp5.mongodb.net/"
    );
    console.log("💜 Database connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

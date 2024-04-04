const mongoose = require("mongoose"); // Importamos mongoose

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samuel8:t4ImxkPNMXAhIrLt@users-nodejs.eyxgrp5.mongodb.net/"
    ); // Hacemos la conexión a la base de datos
    console.log("💜 Database connected succesfully"); // En caso de que todo salga bien, imprime por consola que la base de datos se conectó satisfactoriamente
  } catch (error) {
    console.log(error); // Sino, muestra el error
  }
};

module.exports = connectDB; // Exportamos el modulo para utilizarlo en in archivo principal

const mongoose = require("mongoose"); // Importamos mongoose

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
}); // Creamos el schema con las propiedades todas requeridas para asegurarnos que no lleguen datos vacíos a la base de datos

const Student = mongoose.model("students_simulation", studentSchema); // Definimos una constante Student para almacenar el modelo del schema que creamos anteriormente

module.exports = Student; // E importamos el modulo para utilizarlo en el controlador

const express = require("express"); // Importamos express
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller"); // Importamos las funciones correspondientes a los métodos de un CRUD
const router = express.Router(); // En una constante router guardamos el express.Router()

router.post("/create", createStudent); // Ruta post para crear un estudiante
router.get("/all", getStudents); // Ruta get para obtener los estudiantes
router.get("/:id", getStudentById); // Ruta get para obtener un estudiante por su identificador
router.put("/update/:id", updateStudent); // Ruta put para actualizar un estudiante
router.delete("/delete/:id", deleteStudent); // Ruta delete para eliminar un estudiante

module.exports = router; // Exportamos el modulo router para utilizarlo en el archivo principal

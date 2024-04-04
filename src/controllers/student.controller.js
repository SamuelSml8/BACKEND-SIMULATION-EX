// Controller
const Student = require("../models/student.model.js"); //Se importa el modelo Student

const createStudent = async (req, res) => {
  try {
    const data = req.body; // Guarda lo que el usuario envía en una constante llamada data
    const newStudent = new Student(data); // Crea una constante newStudent que almacena la creación de un nuevo estudiante
    const identificationExist = await Student.findOne({
      identification: req.body.identification,
    }); // valida si ya existe un estudiante con la identificación que ingresó el nuevo estudiante

    if (identificationExist) {
      //Si ya existe un estudiante con esa identificación, no podrá crearse el nuevo estudiante
      return res.status(400).json({
        // status 400 (BAD_REQUEST)
        ok: false,
        message: "Student identification already exist",
        data: null,
      });
    }

    const savedStudent = await newStudent.save(); //Si el estudiante no entra al anterior if, es decir su identificación es única, se guarda en la base de datos
    return res.status(201).json({
      // status 201 (CREATED)
      ok: true,
      message: "Student created succesfully",
      data: savedStudent,
    });
  } catch (error) {
    // Manejo de errores
    if (error.value == undefined) {
      // Cuando el usuario intenta crear un estudiante y olvida un campo, ocurre un error ya que en el modelo todas las propiedades son requeridas, esto hace que salte un error evitando que pueda hacer una validación en el catch, así que analizando, el error me trae un objeto con una llave "value" por cada propiedad que el usuario deja vacía, así que la llave "value" del objeto me trae un valor undefined.
      return res.status(400).json({ // status 400 (BAD_REQUEST)
        ok: false,
        message: "All fields required",
        data: null,
      });
    }
    console.log(`Error creating a Student (POST): `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find(); //Obtenemos todos los estudiantes existentes en la base de datos
    res.status(200).json({ // status 200 (OK)
      ok: true,
      message: "Students",
      data: students,
    });
  } catch (error) { // Manejo de erroress
    console.log(`Error getting all students (GET): `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const studentFound = await Student.findOne({ // Con ayuda del parametro id, buscamos y comparamos en la base de datos un estudiante con la misma identificación para así guardarlo en una constante llamada "studentFound"
      identification: req.params.id,
    });
    if (!studentFound) { // si el estudiante no existe, envía un estado not found (404) y no trae ningún estudiante
      return res.status(404).json({
        ok: false,
        message: "Student not found",
        data: null,
      });
    }

    res.status(200).json({ //Si no entra a la anterior validación (es decir, el estudiante si existe) muestra al estudiante.
      ok: true,
      message: "Student found",
      data: studentFound,
    });
  } catch (error) {
    console.log(`Error getting a student by identification (GET/:id): `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const identificationExist = await Student.findOne({
      identification: req.body.identification,
    });

    if (identificationExist && req.params.id != req.body.identification) {
      return res.status(400).json({
        ok: false,
        message: "Student identification already exist",
        data: null,
      });
    }

    const studentFound = await Student.findOneAndUpdate(
      {
        identification: req.params.id,
      },
      req.body,
      { new: true }
    );

    if (!studentFound) {
      return res.status(404).json({
        ok: false,
        message: "Student not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Student updated succesfully",
      data: studentFound,
    });
  } catch (error) {
    console.log(`Error: `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentFound = await Student.findOneAndDelete({
      identification: req.params.id,
    });

    if (!studentFound) {
      return res.status(404).json({
        ok: false,
        message: "Student not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Student deleted succesfully",
      data: studentFound,
    });
  } catch (error) {
    console.log(`Error: `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};

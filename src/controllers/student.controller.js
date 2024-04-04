// Controller
const Student = require("../models/student.model.js");

const createStudent = async (req, res) => {
  try {
    const data = req.body;
    const newStudent = new Student(data);
    const identificationExist = await Student.findOne({
      identification: req.body.identification,
    });

    if (identificationExist) {
      return res.status(400).json({
        ok: false,
        message: "Student already exist",
        data: null,
      });
    }

    const savedStudent = await newStudent.save();
    return res.status(201).json({
      ok: true,
      message: "Student created succesfully",
      data: savedStudent,
    });
  } catch (error) {
    if (error.value == undefined) {
      return res.status(400).json({
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
    const students = await Student.find();

    res.status(200).json({
      ok: true,
      message: "Students",
      data: students,
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

const getStudentById = async (req, res) => {
  try {
  } catch (error) {
    console.log(`Error: `, error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
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

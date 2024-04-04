const express = require("express");
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const router = express.Router();

router.post("/create", createStudent);
router.get("/all", getStudents);
router.get("/:id", getStudentById);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

module.exports = router;

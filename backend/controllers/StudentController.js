const Student = require("../models/StudentModel");

// create a new student

const createStudent = async (req, res) => {
  const { name, email, age, city, gender } = req.body;
  // console.log(req.body)
  // add document to database
  try {
    const student = await Student.create({
      name: name,
      email: email,
      age: age,
      city: city,
      gender: gender,
    });
    // console.log(student)
    // res.send('student create')
  } catch (error) {
    console.log(error.message);
  }
};

// get all students

const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).send(students);
  } catch (error) {
    console.log(error);
  }
};

// get one student

const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById({ _id: id });
    res.status(200).send(student);
  } catch (error) {
    console.log(error.message);
  }
};

// update a student

const updateStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndDelete({ _id: id });
    if (!student) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(student);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createStudent,
  getAllStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};

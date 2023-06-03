const express = require('express');
const studentRouter = express.Router();
const {createStudent,getAllStudent,getStudent,updateStudent,deleteStudent} = require('../controllers/StudentController')

// create new student
studentRouter.post('/create',createStudent)

// get all students
studentRouter.get('/read',getAllStudent)

// get a student
studentRouter.get('/read/:id',getStudent)

// update a student
studentRouter.put('/update/:id',updateStudent)

// delete a student
studentRouter.delete('/delete/:id',deleteStudent)

module.exports = studentRouter
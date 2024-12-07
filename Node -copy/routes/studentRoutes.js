const express=require("express")
const router=express.Router()
const Student=require("../models/Student")
const studentContoller=require("../controllers/studentController")

router.post('/add-student',studentContoller.createStudent)
router.get('/allstudents',studentContoller.getStudents)
router.get('/student/:id',studentContoller.singleStudent)
router.put('/update/:id',studentContoller.updateStudent)
router.delete('/delete/:id',studentContoller.deleteStudent)
module.exports=router
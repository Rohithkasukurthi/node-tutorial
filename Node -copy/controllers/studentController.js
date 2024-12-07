const Student=require("../models/Student")

const createStudent=async(req,res)=>{
    try{
        const {name,roll,email}=req.body

        const student=new Student({
            name,
            roll,
            email
        })

        await student.save()
        res.status(200).json(student)
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"Server Error"})
    }
}

const getStudents=async(req,res)=>{
    try{
        const students=await Student.find()
        res.status(200).json(students)
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"Server Error"})
    }
}
const singleStudent=async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id)
        if(!student){
            return res.status(404).json({message:"Server Error"})
        }
        res.status(200).json(student)
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"Server Error"})
    }
}

const updateStudent=async(req,res)=>{
    try{
        const {name,roll,email}=req.body
        const myStudent=await Student.findByIdAndUpdate(
            req.params.id,
            {name,roll,email}
        )
        if(!myStudent){
            return res.status(404).json({message:"Server Error"})
        }
        res.status(200).json(myStudent)
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"Server Error"})
    }
}

const deleteStudent=async(req,res)=>{
    try{
        const deleteStudent=await Student.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "The record has been deleted successfully" });
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"Server Error"})
    }
}

module.exports={createStudent,getStudents,singleStudent,updateStudent,deleteStudent}
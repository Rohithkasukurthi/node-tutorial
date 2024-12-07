const express=require("express")
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
const bodyParser=require("body-parser")
const studentRoutes=require("./routes/studentRoutes")
const app=express()

dotEnv.config()

app.use(bodyParser.json())
app.use("/students",studentRoutes)

mongoose.connect("mongodb://localhost:27017/Tutorials").then(()=>{
    console.log("Connected to MongoDB")
})
.catch((error)=>{
    console.log("Error connecting to MongoDB",error)
})

const PORT=3000

app.get("/home",(req,res)=>{
    res.send("Welcome to the home page")
})

app.listen(PORT,(req,res)=>{
    console.log("Server is running on port",PORT)
})



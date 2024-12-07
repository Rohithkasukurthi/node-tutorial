const mongoose=require("mongoose")

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type:String
    }
});

module.exports= mongoose.model("Student",studentSchema);

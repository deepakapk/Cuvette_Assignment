import mongoose, { mongo } from "mongoose"
import validator from "validator"

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    level:{
        type:String,
        enum:["Fresher","Experienced","Internship"],
        required:true
    },
    candidate:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Please provide valid email."],
    },
    endDate:{
        type:Date,
        required:true
    }
})

export const Job = mongoose.model("Job", jobSchema)
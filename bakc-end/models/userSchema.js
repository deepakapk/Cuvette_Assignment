import mongoose, { mongo } from "mongoose";
import jwt from "jsonwebtoken"
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        validate: [validator.isEmail, "Please provide valid email."],
    },
    phone:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    employeeSize:{
        type:Number,
        required:true
    }
})

userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

export const User = mongoose.model("User", userSchema)
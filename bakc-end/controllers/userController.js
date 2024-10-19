import {catchAsyncErrors} from "../middlewares/catchAsycnErrors.js"
import ErrorHandler from "../middlewares/error.js"
import {User} from "../models/userSchema.js"
import {sendToken} from "../utils/jwtToken.js"

export const register = catchAsyncErrors(async(req, res, next)=>{
    try{
        const {name, email, phone, companyName, employeeSize} = req.body 

        if(!name || !email || !phone || !companyName || ! employeeSize) {
            return next(new ErrorHandler("All Fields are required", 400))
        }
        const exisitingUser = await User.findOne({email})
        if(exisitingUser) {
            return next(new ErrorHandler("Email already in use", 400))
        }
        const userData = {name, email, phone, companyName, employeeSize}
        const user = await User.create(userData)
        sendToken(user, 201, res, "User Registered")
    } catch (error) {
        next(error)
    }
})

export const verifyEmail = catchAsyncErrors(async(req, res, next)=>{
    try{
        const {emailOtp} = req.body
        if(!emailOtp)
        {
            return next(new ErrorHandler("Please provide a OTP", 400))
        }
        if(emailOtp != 1234)
        {
            return next(new ErrorHandler("OTP is invalid", 400))
        }
        res.status(200).json({success: true})
    }catch(error){
        next(error)
    }
})

export const getUserDetails = catchAsyncErrors(async(req, res, next)=>{
    const user = req.user
    res.status(200).json({
        success: true,
        user
    })
})

export const verifyPhone = catchAsyncErrors(async(req, res, next)=>{
    try{
        const {phoneOtp} = req.body
        if(!phoneOtp)
        {
            return next(new ErrorHandler("Please provide a OTP", 400))
        }
        if(phoneOtp != 1234)
        {
            return next(new ErrorHandler("OTP is invalid", 400))
        }
        res.status(200).json({success: true})
    }catch(error){
        next(error)
    }
})

export const logout = catchAsyncErrors(async (req, res, next) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .json({
        success: true,
        message: "Logged out successfully.",
      });
  });

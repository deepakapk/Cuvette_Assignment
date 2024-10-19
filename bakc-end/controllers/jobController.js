import {catchAsyncErrors} from "../middlewares/catchAsycnErrors.js"
import ErrorHandler from "../middlewares/error.js"
import {Job} from "../models/jobSchema.js"


export const postJob = catchAsyncErrors(async(req, res, next)=>{
    const {title, description,level,candidate,endDate } = req.body 
    if(!title || !description || !level || !candidate || !endDate) {
        return next(new ErrorHandler('Please fill in all fields', 400))
    }
    if(endDate <= Date.now())
    {
        return next(new ErrorHandler('End date must be in the future', 400))
    }
    const job = await Job.create({ title, description, level, candidate, endDate})
    res.status(201).json({
        success: true,
        message: "Job Posted Successfully"
    })
})
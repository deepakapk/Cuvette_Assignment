import mongoose from "mongoose"

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "JOB_PORTAL_CUVETTE"
    }).then(()=>{
        console.log("Connected to MongoDB")
    }).catch(err=>{
        console.log("Some error occured while connecting to databse")
    })
}
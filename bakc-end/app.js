import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { config } from "dotenv";
import {errorMiddleware} from "./middlewares/error.js"
import { connection } from "./database/connection.js";
import userRouter from "./routes/userRouter.js"
import jobRouter from "./routes/jobRouter.js"
import cron from "node-cron"
import {sendEmail} from "./automation/email.js"


const app = express()

config({ path: "./config/config.env" });
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter)
app.use("/api/v1/job", jobRouter)




connection()

app.use(errorMiddleware)
export default app
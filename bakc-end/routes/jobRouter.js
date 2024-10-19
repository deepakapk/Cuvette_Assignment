import express from "express"
import { postJob } from "../controllers/jobController.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.post("/jobpost",isAuthenticated, postJob)

export default router
import express from "express"
import {getUserDetails, logout, register,verifyEmail,verifyPhone} from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/verifyemail", verifyEmail)
router.post("/verifyphone", verifyPhone)
router.get("/logout",logout)
router.get("/getuser",isAuthenticated,getUserDetails)

export default router
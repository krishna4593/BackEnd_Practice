import express from "express"
import { registerController, getMeController, loginController } from "../controllers/authController.js"
import { authenticate } from "../middlewares/authMiddleware.js"
const authRoute = express.Router()

authRoute.post("/register", registerController)
authRoute.get("/get-me", authenticate, getMeController)
authRoute.post("/login", loginController)

export default authRoute
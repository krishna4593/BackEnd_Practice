import express from "express"
import authRoute from "./routes/authRoute.js";
const app = express();
app.use(express.json())

app.post("/api/auth",authRoute)

export default app;
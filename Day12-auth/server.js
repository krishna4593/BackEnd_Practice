import dotenv from "dotenv";
dotenv.config()
import app from "./src/app.js"
import connectDB from "./src/config/DB.js";

await connectDB()
app.listen(3000, (req,res)=>{
    console.log("server is running at port 3000")
})
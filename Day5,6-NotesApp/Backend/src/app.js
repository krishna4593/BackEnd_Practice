const express = require('express');
const notesRoute = require("./routes/notesRoute")
require("dotenv").config();
const app = express();
const cors = require("cors")
const connectToDB= require("./config/DB")
connectToDB()

//Middlewares
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
//routes
app.use("/notes",notesRoute)


module.exports = app;
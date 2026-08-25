const express = require('express');
const notesRoute = require("./routes/notesRoute")
require("dotenv").config();
const app = express();
const connectToDB= require("./config/DB")
connectToDB()

//Middlewares
app.use(express.json())

//routes
app.use("/notes",notesRoute)


module.exports = app;
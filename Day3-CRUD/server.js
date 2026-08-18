const express = require('express');

const app = express();
app.use(express.json())
const users=[]
//create
app.post("/create", (req,res)=>{
    let body = req.body;
    users.push(body);
    res.send("users saved successfully");
})
//read
app.get("/",(req,res)=>{
    res.send(users)
})



app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
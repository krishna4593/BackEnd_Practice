const express = require("express")
const app = express()
app.use(express.json())
let users=[]
//create\
app.post("/create",(req,res)=>{
    let body = req.body;
    users.push(body);
    res.send({success:true,
        message:"users saved successfully",
        users
    })
})

//read
app.get("/",(req,res)=>{
    res.send(users);
})

//update
app.put("/update/:id",(req,res)=>{
let {id}= req.params
let {name, age }=req.body
let updatedUsers = users.map((val)=>{
   return val.id===id ? {...val, name,age} : val;
})
users= updatedUsers
res.send({
    success:true,
    message:"user updated successfully",
    updatedUsers
})
})

//delete
app.delete("/delete/:id",(req,res)=>{
    let {id}= req.params
  let deleteUser=  users.filter((val)=>{
     return   val.id !==id
    })
 users = deleteUser
 res.send({
    success:true,
    message:"user deleted succesfully",
   deleteUser
 })
})

app.listen(3000,()=>{
    console.log("serevr is running on port 3000")
})
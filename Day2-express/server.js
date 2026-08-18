// let http = require("http")

// let server = http.createServer((req,res)=>{
    
//     console.log(req)
//     if(req.url==="/home"){
//         console.log("Home page")
//     }
    
//      if(req.url==="/user"){
//         console.log("User page")
//     }

//     res.end("server initiated")
// })
// server.listen(3000,()=>{
//     console.log("server is running at port 3000")
// })

const express = require("express");

const app = express();

app.get("/", ( req,res)=>{
    res.send("health check api")
}
)
app.listen(3000,()=>{
    console.log("server is running at port 3000")
})
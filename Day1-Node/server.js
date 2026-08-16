let http = require("http");

let server= http.createServer((req,res)=>{
    res.end("Hello World");
    console.log("hello");
})
server.listen(3000,()=>{
    console.log("server is running on port 3000");
})
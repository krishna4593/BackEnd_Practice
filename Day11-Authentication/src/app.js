import express from 'express';
import jwt from 'jsonwebtoken'; 
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post("/api/register",(req,res)=>{
    const { username,email, password } = req.body;
const token =jwt.sign({
    email, username
}, a05b23bd0c2a465e8f2d21908cd75c11bf017a0855c69e8db6a7480cab477dc5);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data:{
            username,
            email,
            token
        }});
})

export default app;
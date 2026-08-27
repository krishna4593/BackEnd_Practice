const express = require('express');
const upload = require('../config/multer');
const router = express.Router();

router.post("/",upload.array('images'),(req,res)=>{
   try{
     console.log(req.body)
     console.log(req.files)
    res.status(200).json({message:"User created successfully"})
   }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
})
module.exports = router;
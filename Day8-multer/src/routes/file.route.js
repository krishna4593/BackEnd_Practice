const express= require("express")
const router = express.Router()
const upload= require("../config/multer")
router.post("/",upload.single("image"),(req,res)=>{
   try{
     console.log(req.body)
    res.status(200).json({
        message:"data created successfully"
    })
   }catch(err){
    console.log(err)
   }
})

module.exports = router
const mongoose = require("mongoose");

const connectToDB= async()=>{
    try{
      
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MONGODB")
    }
    catch(e){
        console.log("error in connecting db-->", e)
    }
}
module.exports=connectToDB
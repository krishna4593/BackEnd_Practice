import jwt from "jsonwebtoken"
export const authenticate = (req,res,next)=>{
    const token = req.headers.authentication
    if(!token){
      return  res.status(401).json({
            success:false,
            message:"token not found"
        })}

        const user = jwt.verify(token)

        req.user= user
        next()
    
}
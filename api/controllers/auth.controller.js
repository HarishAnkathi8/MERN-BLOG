import User from "../models/Usermodel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
const authController = async(req,res,next)=>{
        const {username,email,password} = req.body


        if(!username || !email || !password || username==="" || email==="" || password === ""){
           next(errorHandler(400,"All the fields are required"))
        }
        const hashedPassword = bcryptjs.hashSync(password,10)

        const Newuser = new User({
            username,
            email,
            password:hashedPassword
        })
        try {
            
        await Newuser.save()
        res.json({
            success:true,
            message:"User created successfully"
        })
        } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
        }

}

export default authController
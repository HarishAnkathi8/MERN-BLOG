import User from "../models/Usermodel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"
export const signup = async(req,res,next)=>{
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

export const signin = async(req,res,next)=>{
            const {email,password} = req.body
            if(!email || !password || email==="" || password === ""){
             return next(errorHandler(400,"All the fields are required"))
            }
           try {
                const user = await User.findOne({email})
                if(!user){
                    return next(errorHandler(401,"Invalid email or password"))
                }
                const comparePasword = bcryptjs.compareSync(password,user.password)
                if(!comparePasword){
                    return next(errorHandler(401,"Invalid email or password"))
                    }

                    // genarate a token

                    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
                    const {password:pass, ...rest} = user._doc
                    res.status(200).cookie("access_token",token,{http:true}).json(rest)
                
           } catch (error) {
                    next(error)
           }
}
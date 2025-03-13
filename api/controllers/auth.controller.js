import User from "../models/Usermodel.js"
import bcryptjs from "bcryptjs"
const authController = async(req,res)=>{
        const {username,email,password} = req.body


        if(!username || !email || !password || username==="" || email==="" || password === ""){
            return res.json({
                success:false,
                message:"Please fill all the fields"
             })
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
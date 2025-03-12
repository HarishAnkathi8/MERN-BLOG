import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.router.js"
dotenv.config()
const app = express()


mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("connected to database")    
}).catch((error)=>{
    console.log(error)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

app.get("/test",(req,res)=>{
    res.json({
        message:"Api is working"
    })
})
app.use("/api/user",userRouter)
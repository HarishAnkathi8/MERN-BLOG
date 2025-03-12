import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

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
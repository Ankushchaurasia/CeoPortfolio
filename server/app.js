const express=require("express")
const cors=require("cors")

const messageRoutes=require("./routes/messageRoutes")

const app=express()

app.use(cors());
app.use(express.json())

app.use("api/messages",messageRoutes)

app.get("/",(req,res)=>{
    res.send("Admin backend routing")
})

module.exports =app;
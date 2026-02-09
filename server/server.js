require("dotenv").config();
const express = require('express');

const app=express();
const connectDB=require("./src/config/db")

connectDB();

const Port=process.env.PORT||5000;
app.get("/",(req,res)=>{
    res.send("hiii i am also there")
})

app.listen(Port,()=>{
    console.log(`app is listening on port ${Port}`)
})
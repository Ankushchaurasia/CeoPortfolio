require("dotenv").config();

const app=require("./app")
const connectDB=require("./config/db")

connectDB();

const Port=process.env.PORT||5000;

app.listen(Port,()=>{
    console.log(`app is listening on port ${Port}`)
})
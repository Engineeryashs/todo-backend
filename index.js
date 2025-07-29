const express=require("express");
require("dotenv").config();
const app=express();
const port=process.env.PORT;
const mainRouter=require("./routers/mainRouter");
const connectDB=require("./db/db");
const cors=require("cors");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/vi",mainRouter);
app.get("/",(req,res)=>{
res.send("Hello world");
})

//We run node js app using listen function on the given port
app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
})
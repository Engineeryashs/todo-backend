const mongoose=require("mongoose");
const mongodbURI=   process.env.MONGODB_URI;
const connectDB=async ()=>{
    try {
        await mongoose.connect(mongodbURI);
        console.log("Mongodb connected");
    } catch (error) {
        console.error(error);
        console.log("Error in connecting database");
        process.exit(1);
    }    
}

module.exports=connectDB
const mongoose=require("mongoose");
const listSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})
const todoList=mongoose.model("todoList",listSchema);
module.exports=todoList;
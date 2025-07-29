const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emailss
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    todos:[
        {
            type:mongoose.Types.ObjectId,
            ref:"todoList"
        }
    ]
})
const User=mongoose.model("User",userSchema);
module.exports=User;
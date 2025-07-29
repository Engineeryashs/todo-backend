const {z}=require("zod");
const userSchema=z.object({
    name:z.string(),
    lastName:z.string(),
    email:z.string().email(),
    password:z.string().min(6).max(12),
})
const userSigninSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6).max(12)
})
const updateUserSchema=z.object({
    name:z.string().optional(),
    lastName:z.string().optional(),
    password:z.string().min(6).max(12).optional()
})
const todoSchema=z.object({
    title:z.string(),
    description:z.string()  
})
const updateTodoSchema=z.object({
    title:z.string(),
    description:z.string()
})
//console.log(userSigninSchema)
module.exports={userSchema,todoSchema,userSigninSchema,updateTodoSchema,updateUserSchema};



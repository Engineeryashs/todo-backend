const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const { todoSchema, updateTodoSchema } = require("./types");
const todoList = require("../db/models/todo-list");
const User = require("../db/models/user");
const router = express.Router();
const mongoose = require("mongoose");

//To create todo we will use this endpoint pehle authMiddleware bhejege for authorisation checks
//Qki server p kuch bhi bhejne s pehle authorisation hona bahut jaruri hain us data ki
router.post("/todos", authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const userId = req.userId;
    console.log("Mein ek userid hu" + userId)
    const response = todoSchema.safeParse(req.body);
    if (!response.success) {
        return res.status(403).json({
            msg: "Invalid todo data"
        })
    }
    try {
        console.log("sy" + userId);

        const todo = await todoList.create({
            title: title,
            description: description,
            user: userId   //referencing userId in todos
        })
        /*Qki pehle user create hua isliye bhaiya uski User._id ko humne token m dala tha toh 
        ab usi token ki value leke humlog usko token m daal rhe h as a references ki y iss user
        ki h aur similarly hum user user m jo array of todos ka referecne h usme b y todo ki id
         push kar rhe hain bhaiya aur y user m b humne array of todo update tabhi kara jab todos
         create hua dhyan rakhne wali baat toh yeh hai bhaiya*/
        console.log(todo);
        const existingUser = await User.updateOne({
            _id: userId
        }, {
            $push: {
                todos: todo._id
            }
        })
        console.log(existingUser);
        res.json({
            msg: "Todos created",
            todo: todo
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
    }
})
router.get("/todosget", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const allTodos = await todoList.find({ user: userId });
        console.log(allTodos);
        res.json({
            allTodos: allTodos,
            msg: "all todos are fetched for this users"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
    }
})
//Back-end Router for toggling completed status thats why we find todo first then we update todo.isCompleted
router.put("/completed/:id", authMiddleware, async (req, res) => {
    const userId = new mongoose.Types.ObjectId(req.userId);
    const todoId = new mongoose.Types.ObjectId(req.params.id);
    try {
        console.log("rk" + userId + "sy" + todoId);
        console.log("rr" + typeof (userId) + typeof (todoId));

        let todo = await todoList.findOne({
            _id: todoId,
            user: userId
        });
    
        console.log("Hi" + todo);
        /*Since here todoList.updateOne can update todoList in back-end but it wont return 
      updated document so we will use finByIdAndUpdateOne which will return updated document
      and will also update the document
      let response = await todoList.updateOne(
          { _id: todoId, user: userId },
          { $set: { isCompleted: !todo.isCompleted } }
      )*/
        const response = await todoList.findOneAndUpdate(
            { _id: todoId, user: userId },

            { $set: { isCompleted: !todo.isCompleted } },

            { new: true }

        )
        console.log("Log"+response)
        res.json({ msg: "Todos completed", 
            todo:response
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})
//yeh karna h ki agar tick kiya aur completed h toh incomplete kar werna fir complete kar usko
//by using findOneAndUpdate

//isme humko yhe karna hai ki agar 
router.put("/edit/:id", authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const userId = req.userId;
    const todoId = req.params.id;
    const response = updateTodoSchema.safeParse(req.body);
    if (!response.success) {
        return res.status(403).json({
            msg: "Authentication error"
        })
    }
    try {
        const updateTodo = await todoList.updateOne({
            _id: todoId,
            user: userId
        }, {
            $set: {
                title: title,
                description: description
            }

        })
        res.json({
            msg: "todo is Updated",
            updateTodo: updateTodo
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
    }
})

router.delete("/remove/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.id;
    try {
        const deleteTodo = await todoList.findOneAndDelete({
            _id: todoId,
            user: userId
        });
        res.json({
            msg: "Deleted todo",
            deleteTodo: deleteTodo
        })
    } catch (error) {

        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})

router.delete("/deleteAll", authMiddleware, async (req, res) => {
    const userId = req.userId;
    try {
        const deleteAll = await todoList.deleteMany({ user: userId });
        res.json({
            msg: "Deleted todo",
            deleteAll: deleteAll
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})


module.exports = router;
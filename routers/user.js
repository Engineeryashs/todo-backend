//See if user exists

//Get users gravatar based onn email's MD5 hashing

//Encrypt password

//Create User collection in db

//Return jsonwebtokens

const express = require("express");
//const zod=require("zod");
const router = express.Router();
//const User = require("../db/models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userSigninSchema, userSchema, updateUserSchema } = require("./types");
const secretKey = process.env.SECRET_KEY;
const User = require("../db/models/user");
const { authMiddleware } = require("../middleware/auth");


router.post("/signup", async (req, res) => {
  const { name, lastName, email, password } = req.body;
  const response = userSchema.safeParse(req.body);
  if (!response.success) {
    return res.status(403).json({
      msg: "Invalid data types"
    })
  }
  try {
    const isExistingUser = await User.findOne({ email: email });
    const avatar = gravatar.url(email, {
      s: '200',//size
      r: 'pg',//rating
      d: 'mm'//default mysteric man
    });  //It gives avatar based on MD-5 hashing of email so email is necessary in gravatar.url function
    if (!isExistingUser) {
      //Get users avatar from gavatar
      //Passwords hashing
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //Here we will put hashedpassword in the User
      const newUser = await User.create({
        name: name,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        avatar: avatar
      })
      //After that we will sign jwt token
      const token = jwt.sign({ userId: newUser._id }, secretKey);
      //return JWT
      return res.json({
        token: token,
        msg: "User created succesfully"
      })
    }
    return res.status(409).json({
      msg: "User exists already in the database"
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: "Internal server error"
    })
  }
})
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  //Extract email and password from req.body
  console.log("My body is " + email + password)
  //console.log(userSigninSchema)
  //  console.log(userSchema)
  const response = userSigninSchema.safeParse(req.body);
  //Zod parsing of req.body
  if (!response.success) {
    return res.status(403).json({
      msg: "Invalid data types"
    })
  }
  //Check if the email id is in the DB or not
  const isUser = await User.findOne({ email: email });
  if (!isUser) {
    return res.status(404).json({
      msg: "User not found"
    })
  }
  //Compare the password user gave tp already stored hashed password in the Database.
  const isPassword = await bcrypt.compare(password, isUser.password);

  if (!isPassword) {
    return res.status(401).json({
      msg: "Invalid password or password not found"
    })
  }
  console.log(isUser._id);
  const token = jwt.sign({ userId: isUser._id.toString()}, secretKey);
  res.json({
    msg: "User signed in successfully",
    token: token
  })
  //Here,signup and signin logic always returns JWT token because that token is used always for the authentications.
})
router.get("/getUserData",authMiddleware,async(req,res)=>{
  const userId=req.userId;
  try {
    let response=await User.findOne({
      _id:userId
    })
    console.log(response);
    res.json({
      user:response,
      msg:"User found succesfully"
    })
  } catch (error) {
    res.status(404).json({
      msg:"There is some error in fetching user or authentication is wrong"
    })
    console.log(error.message);
  }
})

router.put("/updateProfile",authMiddleware,async (req,res)=>{
  const userId=req.userId;
  const{updateName,updateLastName,updatePassword}=req.body;
  const response=updateUserSchema.safeParse(req.body)
   if (!response.success) {
    return res.status(403).json({
      msg: "Invalid data types"
    })
  }
  try {
   const userDetails={}
   if(updatePassword)
   {
    const salt=await bcrypt.genSalt(10);
    const hashedUpdatedPassword=await bcrypt.hash(updatePassword,salt);
    userDetails.password=hashedUpdatedPassword;
   }
   else{
    userDetails.name=updateName;
    userDetails.lastName=updateLastName;
   }
   const updatedData=await User.findByIdAndUpdate(userId,{$set:userDetails},
  {
    new:true
  })
  console.log(updatedData);
  res.json({
    msg: updatePassword
        ? "Password updated successfully"
        : "Profile updated successfully",
    updateData:updatedData
  })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg:"Internal Server Error"
    })
  }
})
module.exports = router;
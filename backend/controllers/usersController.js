const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//register
 const registerUser = asyncHandler ( async (req, res) => {
   const {name, email, password} = req.body
   // validate data before submitting
   if(!name || !email || !password) {
      res.status(401).json({
         message:"All fields are required"
      })
      // throw new Error("All fields are required1")
   }

   // check if user exist b4 register
   const userExists = await User.findOne({email})
   if(userExists) {
      res.status(401).json({
         message: "User alraedy exist"
      })
   }

   const user = await User.create({
      name,
      email,
      password
   })

   //check if user
   if(user) {
      res.status(200).json({
         _id: user.id,
         name: user.name,
         email: user.email
      })
   }else {
      res.status(401).json({
         message: "Invalid user data"
      })
      // throw new Error('Invalid user')
   }

 })

 //login
 const loginUser = async (req, res) => {
   res.json({
     message: "Login"
   })
}

 const getUsers = async (req, res) => {
    res.json({
      message: "Me"
    })
 }


module.exports = {
    getUsers,
    loginUser,
    registerUser
}
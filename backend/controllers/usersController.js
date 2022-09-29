const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

//register
 const registerUser = asyncHandler ( async (req, res) => {
   const {name, email, password} = req.body
   // validate data before submitting
   if(!name || !email || !password) {
      res.status(401).json({
         message:"All fields are required"
      })
      //throw new Error("All fields are required1")
   }

   // check if user exist b4 register
   const userExists = await User.findOne({email})
   if(userExists) {
      res.status(401).json({
         message: "User alraedy exist"
      })
   }

   //hash the password b4 sending to db
   const salt = await bcrypt.genSalt(10)

   const hashedPassword = await bcrypt.hash(password, salt)

   const user = await User.create({
      name,
      email,
      password: hashedPassword
   })

   //check if user
   if(user) {
      res.status(200).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: genereToken(user._id)
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
   const {email, password} = req.body

   //check if user with email exists
   const user = await User.findOne({email})

   if(user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
         _id: user.id,
         email: user.email,
         token: genereToken(user.id)
      })
   }else {
      res.status(401).json({
         message: "Invalid creditials"
      })
   }
}

 const getMe = async (req, res) => {
   const {_id, email, name} = await User.findById(req.user.id)
   res.status(200).json({
      id: _id,
      name,
      email
   })
   
 }

 // generate a json token
 const genereToken = (id) => {
   return jwt.sign({id}, process.env.JWT_SECRET, {
      expiresIn: "30d",
   })
 }


module.exports = {
    getMe,
    loginUser,
    registerUser
}
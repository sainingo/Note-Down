const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler( async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            // assign var token with the actual jwt token from headers
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user if from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401).json({
                message: "Not Authorized"
            })
        }
    }
    if(!token) {
        res.status(401).json({
            message: "No token found, Not Authorized"
        })
    }
})

module.exports = { protect }
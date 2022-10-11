const asyncHandler = require('express-async-handler')
const Idea = require('../models/ideaModel')
const User = require('../models/userModel')

const getIdeas = asyncHandler(async (req, res) => {
    const ideas = await Idea.find({user: req.user.id})
    res.json(ideas)
})

const setIdea = asyncHandler( async (req, res) => {
 
    if(!req.body.idea) {
        res.status(400)
        throw new Error('Please add an Idea')
    }

    const idea = await Idea.create({
        idea: req.body.idea,
        user: req.user.id,
    })

    res.json(idea)
})

const updateIdea = asyncHandler( async (req, res) => {
    const idea = await Idea.findById(req.params.id)

    //check if idea is there
    if(!idea) {
        res.status(400)
        throw new Error('No idea found')
    }

    //check if user logged in matched idea's user
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(400)
        throw new Error("No user found")
    }

    //check if user details matches logged in user
    if(idea.user.toString() !== user.id) {
        res.status(400)
        throw new Error('User not authorized')
    }
     const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedIdea)
})

const deleteIdea = asyncHandler( async (req, res) => {
    const idea = await Idea.findById(req.params.id)

    //check if idea is there
    if(!idea) {
        res.status(400)
        throw new Error('No idea found')
    }

    //check if user logged in matched idea's user
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found!')
    }

    //check if user details matches logged in user
    if(idea.user.toString() !== user.id) {
        res.status(400)
        throw new Error('User not Authorized!')
    }

    await idea.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getIdeas,
    setIdea,
    updateIdea,
    deleteIdea
}
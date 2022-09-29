const asyncHandler = require('express-async-handler')
const Idea = require('../models/ideaModel')

const getIdeas = asyncHandler(async (req, res) => {
    const ideas = await Idea.find()
    res.json(ideas)
})

const setIdea = asyncHandler( async (req, res) => {
 
    if(!req.body.idea) {
        res.status(400)
        throw new Error('Please add an Idea')
    }

    const idea = await Idea.create({
        idea: req.body.idea
    })

    res.json(idea)
})

const updateIdea = asyncHandler( async (req, res) => {
    res.send('Update idea')
})

const deleteIdea = asyncHandler( async (req, res) => {
    res.send('Delete idea')
})

module.exports = {
    getIdeas,
    setIdea,
    updateIdea,
    deleteIdea
}
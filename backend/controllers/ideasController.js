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
     const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedIdea)
})

const deleteIdea = asyncHandler( async (req, res) => {
    const deletedIdea = await Idea.findByIdAndDelete(req.params.id)
    res.json(deletedIdea)
})

module.exports = {
    getIdeas,
    setIdea,
    updateIdea,
    deleteIdea
}
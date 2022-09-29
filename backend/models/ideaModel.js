const mongoose = require('mongoose')

const ideaSchema = mongoose.Schema({
    idea: {
        type: String,
        required: [true, "Please note down an Idea"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Idea', ideaSchema)
const mongoose = require('mongoose')

const ideaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    idea: {
        type: String,
        required: [true, "Please note down an Idea"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Idea', ideaSchema)
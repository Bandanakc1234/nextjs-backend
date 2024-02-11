const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProjectModel = new Schema({
    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    language: {
        type: String,
        required: true
    },
    tools: {
        type: String,
        required: true
    },
    image: [String],

    isActivated: {
        type: Boolean,
        default: false
    }
})
module.exports = Project
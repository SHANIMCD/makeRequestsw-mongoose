const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: { type: String },
    category: { type: String },
    imageMain: { type: String } 
})

module.exports = mongoose.model('Exercise', exerciseSchema)
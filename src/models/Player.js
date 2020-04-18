const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: String,
    attempts: Number
})


module.exports = mongoose.model('Player', PlayerSchema)
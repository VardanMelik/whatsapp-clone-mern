const mongoose = require('mongoose');


// Schema
const whatsappSchema = mongoose.Schema({
    message: {
        type: String
    },
    name: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date
    },
    received: {
        type: Boolean,
    } 
})

module.exports = mongoose.model('whatsappSchema', whatsappSchema);
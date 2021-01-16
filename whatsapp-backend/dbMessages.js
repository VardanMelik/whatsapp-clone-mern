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
        default: Date.now
    },
    received: {
        type: Boolean,
    } 
})

// collection
module.exports = mongoose.model('whatsappSchema', whatsappSchema);
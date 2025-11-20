const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true  
    },
    to: {
        type: String,
        required: true  
    },
    msg: {
        type: String,   
        required: true
    },
    create_at: {
        type: Date,
        required: true  
    }
}); 

const chats = mongoose.model('chats', userSchema);


module.exports = chats;
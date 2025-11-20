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

let chat1 = new chats({
    from: "Harsh",
    to: "Tony",
    msg: "Hello Tony, How are you?",
    create_at: new Date()
});

chat1.save().then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});


module.exports = chats;
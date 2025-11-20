const mongoose = require('mongoose');
const chats = require('./models/chat');

main().then(() =>console.log('Connected to MongoDB')).catch(err => console.log(err));


 async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


let allChats = [
    {
        from: "Harsh",  
        to: "Tony",
        msg: "Hello Tony",
        create_at: new Date()
    },  
    {
        from: "Tony",  
        to: "Harsh",    
        msg: "Hello Harsh",
        create_at: new Date()
    }
];

chats.insertMany(allChats).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});
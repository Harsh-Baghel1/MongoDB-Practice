const express = require('express');
const mongoose = require('mongoose');
const app = express();

const chats = require('./models/chat');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  


main().then(() =>console.log('Connected to MongoDB')).catch(err => console.log(err));


 async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
}



app.get('/', (req, res) => {
    res.send("Hello from the other side");
});


app.listen(8080,() => {
    console.log("Server is running on port 8080");
})
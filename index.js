const express = require('express');
const mongoose = require('mongoose');
const chats = require('./models/chat');   // Must include this
const methodOverride = require('method-override');



main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/chats', async(req, res) => {
    let Allchats = await chats.find();
    res.render('index.ejs', { Allchats });
});

// new route to create a chat
app.get('/chats/new', (req, res) => {
    res.render('newchat.ejs');
});

// route to edit a chat
app.get('/chats/:id/edit', async(req,res) => {
    let { id } = req.params;
    let chat = await chats.findById(id);
    res.render('edit.ejs', { chat });
});

// route to update a chat
app.put('/chats/:id', async(req,res) => {
    let { id } = req.params;
    let { msg } = req.body;
    await chats.findByIdAndUpdate(id, {
        msg: msg.trim()
    });
    res.redirect('/chats');
});

// route to delete a chat
app.delete('/chats/:id', async(req,res) => {
    let { id } = req.params;
    await chats.findByIdAndDelete(id);
    res.redirect('/chats');
});


app.post('/chats', async(req, res) => {
    let {from,msg, to } = req.body;
    let newchat = new chats({ 
        from: from.trim(), 
        msg: msg.trim(), 
        to: to.trim(),
        create_at: new Date()  
    });
    await newchat.save();
    res.redirect('/chats');  //
}); 
      

app.get('/', (req, res) => {
    res.send("Hello from the other side");
});

app.listen(8080,() => {
    console.log("Server is running on port 8080");
});

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  

app.get('/', (req, res) => {
    res.send("Hello from the other side");
});


app.listen(8080,() => {
    console.log("Server is running on port 8080");
})
// require express
var express = require('express');
// this is incase you only want to use a part of the package
var app = express();
// require mongoose library
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require("cors");

var Contact = require('./models/Contact.js');

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// connect with url of database
mongoose.connect('mongodb://localhost:27017/test')
// once connected to databse
.then(() => {
    console.log('connected to db');
})
// if error
.catch(err => {
    console.log('not connected to db')
});

// get request to get something from server
app.get('/', (req, res)=>{ 
    res.send("fuck off")
})

app.get('/about', (req, res)=>{ 
    res.send("about fucking off")
})

app.post('/api/addContact', (req, res)=>{
    // get name email and number from form
    const { name,email,number } = req.body;

    let contact =  new Contact({
        name, 
        email, 
        number
    });

    contact.save();

    const requestURL = req.get('origin');
    res.redirect(requestURL);

})

app.get('/api/getContact', cors(), (req,res)=>{
    Contact.find({}, (err, docs) =>{
        res.json(docs);
    });
})

// listening on port 3000
app.listen(port, () => {
    console.log('Server listeing on port 3000');
})
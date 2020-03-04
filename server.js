// require express
var express = require('express');
// this is incase you only want to use a part of the package
var app = express();

// get request to get something from server
app.get('/', (req, res)=>{ 
    res.send("fuck off")
})

app.get('/about', (req, res)=>{ 
    res.send("about fucking off")
})

// listening on port 3000
app.listen(3000, () => {
    console.log('Server listeing on port 3000');
})
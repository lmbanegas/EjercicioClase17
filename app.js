const express = require('express');
const path = require('path');


const app = express();
app.use(express.static('public'));

const publicPath = path.join(__dirname,'public');



app.get ('/',(req,res) => {
    res.sendFile (path.join(__dirname, '/views/home.html'));
});

app.get ('/login',(req,res) => {
    res.sendFile (path.join(__dirname, '/views/login.html'));
});

app.get ('/register',(req,res) => { 
        res.sendFile (path.join(__dirname, '/views/register.html'));
});



app.listen(3030, () => 
console.log("Ok")
);
const express = require('express');
const path = require('path');
// const dotenv = require('dotenv').config();

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
        res.sendFile(path.join(__dirname, '/views/register.html'));
});



// app.listen(process.env.PORT, () => 
// console.log('Servidor ' + process.env.PORT +'http://localhost:3030'  )
// );

app.listen(3030, () => 
console.log('Servidor http://localhost:3030'  )
);
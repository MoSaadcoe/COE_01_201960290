const express = require('express');
const app = express();
app.use(express.static('COE453_01_201960290')); 
app.listen(3000, () => {    console.log('Server is up on 3000');
    } );
app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
      });
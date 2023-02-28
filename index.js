const express = require('express');

const app = express();

app.get(
    '/',
    function(req, res){
        res.send('Hello world CI/CD completed')

    }
);

app.listen(80);
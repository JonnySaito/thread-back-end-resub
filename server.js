const express = require('express');
const app = express();
const port = 3000;

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', function(req, res){
    res.send('Welcome to our Products API. Use endpoints to filter out the data');
});



app.listen(port, () => {
    console.clear();
    console.log(`application is running on port ${port}`)
});

var express = require('express');
var app = express();
var payload = require('./payload.json');

var port = process.env.port || 8888;

//Initiate routes for api
var router = express.Router();

router.get('/products', function (req, res) {
    res.json(payload);
});

app.use('/api', router);

app.get('*', function(req, res){
    res.status(404).send({error: true, message: "Invalid request"});
});


app.listen( port, function(err) {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on http://localhost:"+port);
});
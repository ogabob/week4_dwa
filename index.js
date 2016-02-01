var express = require('express');


var app = express();
var router = express.Router();




router.get('/', function (req, res){
res.send(' { “Hello”: “World” }');
});

router.get('/v1', function (req, res){
res.send(' { “Hello”: “World” }');
});

app.use('/api', router)

app.listen(4000);


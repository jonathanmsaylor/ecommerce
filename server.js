var bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/public/dist/public/index.html'));
});

app.listen(4000, function(){
    console.log('on port 4000');
})
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname+'/public')));
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(PORT, function() {
 console.log('server running on http://localhost:' + PORT);
});

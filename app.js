var express = require('express');
var app = express();
var path = require('path');

app.use('/images', express.static(__dirname + '/images'));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/html/landing.html');
})

app.get('/store', function(req, res){
    res.sendFile(__dirname +'/html/store.html');
})

app.post('/', function(req, res){

})

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

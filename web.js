var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

//var fileData = new Buffer('Something else');

app.get('/', function(request, response) {
  //response.send('Hello World 3!');
  var fileData = fs.readFileSync('./index.html', 'utf8');
  response.send(fileData.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


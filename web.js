var express = require('express');
var app = express();
app.use(express.logger());

var fileData = new Buffer(fs.readFileSync('./index.html', 'utf8'));
//var fileData = new Buffer('Something else');

app.get('/', function(request, response) {
  //response.send('Hello World 3!');
  response.send(fileData.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


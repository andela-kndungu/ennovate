var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.listen(PORT, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', PORT);
  }
});


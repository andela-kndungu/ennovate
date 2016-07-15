var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.listen(3000, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port 3000');
  }
});


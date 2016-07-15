import express from 'express';
let app = express();
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', PORT);
  }
});


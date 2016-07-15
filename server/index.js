import express from 'express';
import mongoose from 'mongoose';

let app = express();
const PORT = process.env.PORT || 3000
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/ennovate';

// Connect to the database and get the connection
mongoose.connect(databaseUri);
const dbConnection = mongoose.connection;

// Provide feedback on the DB connection
dbConnection.on('error', (error) => {
  console.error(error);
});

dbConnection.once('open', () => {
  console.info('Successfully connected to db');
});

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


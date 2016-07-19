import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

if (!process.env.DATABASE_URI) {
  require('dotenv').config();
}

const PORT = process.env.PORT;
const databaseUri = process.env.MONGODB_URI;

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

// Set up bodyParser to get passed parameters and post bodies
app.use(bodyParser.urlencoded({
  extended: true,

}));

app.use(bodyParser.json());

app.use(express.static('public'));

// Handle all routes
router(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', PORT);
  }
});


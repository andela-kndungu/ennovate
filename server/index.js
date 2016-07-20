import express from 'express';

import config from './config';

const app = express();

// Connect to the database
config.db();

// Setup passport strategies
// config.passport();

// Add middleware to express
config.express(app);

// Start taking requests
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', process.env.PORT);
  }
});


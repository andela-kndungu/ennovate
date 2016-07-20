if (!process.env.MONGODB_URI) {
  require('dotenv').config();
}

import mongoose from 'mongoose';

const databaseUri = process.env.MONGODB_URI;
const dbConnect = () => {
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
};

export default dbConnect;


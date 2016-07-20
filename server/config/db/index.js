import mongoose from 'mongoose';

if (!process.env.DATABASE_URI) {
  require('dotenv').config();
}

const databaseUri = process.env.MONGODB_URI;
const connect = () => {
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

export default connect;


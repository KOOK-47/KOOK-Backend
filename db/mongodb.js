import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../config/config.js';

// Connect to the database
function connectToDB() {
  mongoose.connect(MONGO_DB_URL);

  mongoose.connection.on('connected', () => {
    console.log('db connected successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log('error occurred while trying to connect to db');
    console.log(err);
  });
}

// Export the function
export { connectToDB };

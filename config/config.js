import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Retrieve environment variables
const { PORT, MONGO_DB_URL, SECRET } = process.env;

// Export variables
export { PORT, MONGO_DB_URL, SECRET };

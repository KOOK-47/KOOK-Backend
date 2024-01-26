import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config/config.js';
import { connectToDB } from './db/mongodb.js';
import usersRouter from './routes/users.routes.js';
import lookupRouter from './routes/lookup.routes.js';

// Create an express app
const app = express();

// Connect to the database
connectToDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/lookup', lookupRouter);

// Define a simple welcome route
app.get('/', (_req, res) => {
  res.send('Welcome to kook!');
});

// Error handler middleware
app.use((err, _req, res, next) => {
  console.error(err);
  const errorStatus = err.status || 500;
  res.status(errorStatus).send(err.message);
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

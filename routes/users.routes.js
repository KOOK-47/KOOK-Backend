import express from 'express';
import { deleteUserByID, getAllUsers, getUserByID, updateUser } from '../controllers/user.controller.js';


// Create an express router
const usersRouter = express.Router();

// Define routes
usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserByID);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUserByID);


// Export the router
export default usersRouter;

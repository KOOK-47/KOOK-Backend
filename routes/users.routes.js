import express from 'express';
import { loginUser, registerUser } from '../auth/auth.js';
import { createNewUser, deleteUserByID, getAllUsers, getUserByID, updateUser } from '../controllers/user.controller.js';
import { validateLogin, validateRegisteredUser } from '../validators/validator.js';

// Create an express router
const usersRouter = express.Router();

// Define routes
usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserByID);
usersRouter.post('/', createNewUser);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUserByID);
usersRouter.post(
  '/register',
  validateRegisteredUser,  // Handle registration in the controller
  registerUser
);
usersRouter.post(
  '/login',
  validateLogin,
  loginUser
);

// Export the router
export default usersRouter;

import express from 'express';
import { loginUser, registerUser } from '../auth/auth.js';
import { validateLogin, validateRegisteredUser } from '../validators/validator.js';

// Create an express router
const authRouter = express.Router();


// Define  auth routes
authRouter.post(
    '/register',
    validateRegisteredUser,  // Handle registration in the controller
    registerUser
  );
  
authRouter.post(
    '/login',
    validateLogin,
    loginUser
  );


// Export the router
export default authRouter;
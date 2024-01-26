import { body } from 'express-validator';
export const validateRegisteredUser = [
  body('firstname').notEmpty().withMessage('First name is required'),
  body('lastname').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('role').isIn(['private_chef', 'individual', 'catering_business']).withMessage('Invalid role'),
];

export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required'),
];

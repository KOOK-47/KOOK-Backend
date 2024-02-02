import userModel from '../models/user_model.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/config.js';

// Registration logic
async function registerUser(req, res) {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Extract user data from the request body
  const { firstname, lastname, email, password, role } = req.body;

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role,
      lastUpdateAt: new Date(),
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with the created user
    res.status(201).send("account created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

async function loginUser(req, res) {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract user data from the request body
  const { email, password } = req.body;

  try {

    // Find the user by email
    const user = await userModel.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Check if the password is valid
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.json({ token, userId: user._id, role: user.role, email: user.email, firstname: user.firstname, lastname: user.lastname });

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

export { registerUser, loginUser };


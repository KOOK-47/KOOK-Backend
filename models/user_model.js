import mongoose from 'mongoose';

// Create a schema using mongoose.Schema
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['private_chef', 'individual', 'catering_business'],
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now
  },
});

// Export the mongoose model
export default mongoose.model('users', UserSchema);

import userModel from '../models/user_model.js';

// Get all users
async function getAllUsers(_req, res) {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
}

// Get user by ID
async function getUserByID(req, res) {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
}

// Create a new user
// async function createNewUser(req, res) {
//   const user = req.body;
//   user.lastUpdateAt = new Date();

//   try {
//     const createdUser = await userModel.create(user);
//     res.status(201).send(createdUser);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// }

// Update a user
async function updateUser(req, res) {
  const id = req.params.id;
  const user = req.body;
  user.lastUpdateAt = new Date();

  try {
    const newUser = await userModel.findByIdAndUpdate(id, user, { new: true });
    res.status(200).send(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Delete user by ID
async function deleteUserByID(req, res) {
  const id = req.params.id;

  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).send(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Export the functions
export {
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUserByID
};

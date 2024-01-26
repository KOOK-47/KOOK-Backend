const express = require("express")
const userController = require("../controllers/user.controller")

const usersRouter = express.Router()

usersRouter.get("/", userController.getAllUsers)

usersRouter.get("/:id", userController.getUserByID)

usersRouter.post("/", userController.createNewUser)

usersRouter.put("/:id", userController.updateUser)

usersRouter.delete("/:id", userController.deleteUserByID)


module.exports = usersRouter
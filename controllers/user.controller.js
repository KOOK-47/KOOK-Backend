const userModel = require('../models/user_model')

function getAllUsers(req, res) {
    userModel.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}

function getUserByID(req, res) {
    const id = req.params.id
    userModel.findById(id)
        .then(user => {
            res.status(200).send(user)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function createNewUser(req, res) {
    const user = req.body
    user.lastUpdateAt = new Date() 
    userModel.create(user)
        .then(user => {
            res.status(201).send(user)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updateUser(req, res) {
    const id = req.params.id
    const user = req.body
    user.lastUpdateAt = new Date()
    userModel.findByIdAndUpdate(id, user, { new: true })
        .then(newUser => {
            res.status(200).send(newUser)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteUserByID(req, res) {
    const id = req.params.id
    userModel.findByIdAndRemove(id)
        .then(user => {
            res.status(200).send(user)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


module.exports = {
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUser,
    deleteUserByID
}
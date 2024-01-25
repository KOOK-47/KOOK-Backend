const mongoose = require("mongoose")
const { DB_URL } = require("../config/config")


function connectToDB() {
    mongoose.connect(DB_URL)

    mongoose.connection.on("connected", () => {
        console.log("db connected successfully")
    })

    mongoose.connection.on("error", (err) => {
        console.log("error occured while trying to connect to db")
        console.log(err)

    })
}


module.exports = {
    connectToDB
}
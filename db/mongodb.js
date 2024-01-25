const mongoose = require("mongoose")
const { DB_URL } = require("../config/config")


function connectToDB() {
    mongoose.connect()

    mongoose.connection.on("connected", () => {
        logger.info("Database connected successfully")
    })

    mongoose.connection.on("error", (err) => {
        logger.error(err)

    })
}
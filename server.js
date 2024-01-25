const express = require("express")
const { PORT } = require("./config/config")
const { connectToDB } = require("./db/mongodb")

const app = express();
connectToDB();


app.use(express.json())


app.get("/", (req, res) => {
    // ...
    res.send("welcome to kook!")
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
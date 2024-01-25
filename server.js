const express = require("express")
const { PORT } = require("./config/config")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    // ...
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
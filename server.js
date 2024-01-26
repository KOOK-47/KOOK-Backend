const express = require("express")
const bodyParser = require("body-parser")
const { PORT } = require("./config/config")
const { connectToDB } = require("./db/mongodb")
const usersRouter = require("./routes/users.routes")

const app = express();
connectToDB();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/users", usersRouter)

app.get("/", (req, res) => {
    res.send("welcome to kook!")
})



// error handler middleware
app.use((err, req, res, next) => {
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
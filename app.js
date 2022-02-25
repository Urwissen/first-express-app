const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>I love coding!</h1>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello, JavaScript Developer!</h1>")
})

app.listen(3000, () => {
    console.log("The application is running at localhost:3000")
})
const express = require('express')
const app = express();
const Port = 5000;

const sendMail = require("./controllers/sendMail")

app.get("/", (req, res)=>{
    res.send("i am server")
})

app.get("/mail", sendMail)

const start = async()=>{
    try {
        app.listen(Port, (req, res)=>{
            console.log(`server is listening on port ${Port}`)
        })
    } catch (error) {}
}

start();
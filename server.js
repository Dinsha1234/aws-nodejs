const express = require("express")
const app = express()
require("dotenv").config()

app.get('/get/user', (req,res)=>{
    res.send({message: "hello back to node js"})
})

app.get('/get/user_details', (req,res)=>{
    res.send({
        user: {
            name: "Dinsha",
            age: 25,
            contact:12234,
            keyword: "hey there"
        }
    })
})

app.listen(process.env.PORT,()=> {
    console.log('listening to port', process.env.PORT)
})
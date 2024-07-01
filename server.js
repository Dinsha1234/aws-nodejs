const express = require("express")
const app = express()

app.get('/get/user', (req,res)=>{
    res.send({message: "hello back to node js"})
})

app.listen(3000,()=> {
    console.log('listening to port', 3000)
})
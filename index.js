require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 9000

server.get('/api/users', (req,res)=>{
    res.json({
        message: "You got the users"
    })
})

server.use('*', (req,res)=>{
    res.json("Welcome to my project")
})

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})

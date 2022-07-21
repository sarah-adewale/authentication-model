const express = require('express')
const app = express()
const PORT = 4300
require('dotenv').config() //require dotenv
const connectDB = require('./db')

connectDB()

app.use(express.json())

app.use('/api/auth', require('./Auth/Route'))

const server = app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))

process.on('unhandledRejection', err => {
    console.log(`An error occured: ${err.message}`) //if hits error,
    server.close(() => process.exit(1)) //close server exit process
})
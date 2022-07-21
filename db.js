const Mongoose = require('mongoose')


const connectDB = async () => {
    Mongoose.connect(process.env.RemoteDB)
    .then(client => {
        console.log("MongoDB Connected")
    })
}

module.exports = connectDB
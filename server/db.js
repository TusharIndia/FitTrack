const mongoose = require('mongoose')
require('dotenv').config();

const mongouri = process.env.MONGO_URI

const connectToMongo = async () => {
    await mongoose.connect(mongouri)
    console.log('Connected to mongodb successfully')
}

module.exports = connectToMongo
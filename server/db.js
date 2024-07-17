const mongoose = require('mongoose')
const mongouri = 'mongodb://localhost:27017/Workoutt'

const connectToMongo = async () => {
    await mongoose.connect(mongouri)
    console.log('Connected to mongodb successfully')
}

module.exports = connectToMongo
const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
require('dotenv').config();

connectToMongo();
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST","GET", 'PUT', 'DELETE'],
        credentials: true
    }
))

app.use('/api/user',require('./routes/user'));
app.use('/api/workout',require('./routes/workout'));

app.listen(5000,()=>{
    console.log('Listening at the port 5000')
})
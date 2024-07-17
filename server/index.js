const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
require('dotenv').config();

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: ["https://fit-track-iota.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use('/api/user', require('./routes/user'));
app.use('/api/workout', require('./routes/workout'));

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});

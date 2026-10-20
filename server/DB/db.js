require('dotenv').config()

const DB_URL = process.env.DB_URL
const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log("db connected sussfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection;

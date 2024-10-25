const mongoose = require('mongoose');
require('dotenv').config();


const db = async()=>{
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to mongo DB :",error);
    }
}

module.exports = db;
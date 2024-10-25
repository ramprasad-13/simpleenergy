const express = require('express');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const teamRoutes = require('./routes/teams');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

//connect to database
db();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/teams', teamRoutes);

app.get("/",(req,res)=>{
    res.json({"success":"App deployed sucessfully"})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;

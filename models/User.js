const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }]
});


const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');


const teamSchema = new mongoose.Schema({
    name: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    role: { type: String, enum: ['Owner', 'Admin', 'Member'] }
});


const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
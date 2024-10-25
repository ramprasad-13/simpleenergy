const express = require('express');
const Team = require('../models/Team');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

// Create a team
router.post('/', authenticateJWT, async (req, res) => {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
});

// Get all teams
router.get('/', authenticateJWT, async (req, res) => {
    const teams = await Team.find();
    res.json(teams);
});

// Add member to team
router.post('/:id/members', authenticateJWT, async (req, res) => {
    const team = await Team.findById(req.params.id);
    team.members.push(req.body.userId);
    await team.save();
    res.json(team);
});

module.exports = router;

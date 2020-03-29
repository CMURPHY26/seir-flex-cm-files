const express = require('express');
const users = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js');


users.get("/", (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.username = req.body.username.toLowerCase();
    User.create(req.body, (err, createdUser) => {
        
    });
})








module.exports = users;
const express = require('express');
const users = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users.js');











module.exports = users;
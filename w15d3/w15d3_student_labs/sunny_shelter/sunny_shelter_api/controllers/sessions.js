const express = require('express');
const sessions = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/user.js");



sessions.post("/", (req, res) => {
    // console.log(req.body)
    User.findOne({username: req.body.username.toLowerCase()}, (err, foundUser) => {
        if (err) {
            res.status(400).json({ error: error.message })
          }
          console.log(foundUser)

        if(!foundUser) {
            // console.log(err);
            res.redirect("/");
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.json(foundUser);
            } else {
                res.send("wrong password");
            }
        }
    });
});



sessions.delete("/", (req, res) => {
    req.session.destroy( () => {
        res.redirect("/");
    });
});







module.exports = sessions;
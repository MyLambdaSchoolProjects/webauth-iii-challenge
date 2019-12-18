const router = require('express').Router();

const Users = require("./users-model");

const restricted = require('../auth/restricted-middleware.js');//for basic authorization

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

const router = require('express').Router();

const Users = require("./users-model");

const restricted = require('../auth/restricted-middleware.js');//for basic authorization

router.get("/", restricted, (req, res) => {
  const dept = req.token.department
  console.log(dept);
  Users.find()
    .then(users => {
      res.status(200).json(users.filter(user=> user.department === dept));
      
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.get("/all", restricted, (req, res) =>{
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
})

module.exports = router;

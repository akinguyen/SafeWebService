const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send({ user: "Cannot find the user" });
    });
});
router.post("/", (req, res) => {
  const user = {
    username: req.body.username,
    name: req.body.name,
    password: req.body.pwd
  };
  User.findOne({ username: req.body.username }).then(result => {
    if (result) {
      res.send({ msg: "User already exists" });
    } else {
      new User(user).save().then(res => {
        res.status(200).send(res);
      });
    }
  });
});
module.exports = router;

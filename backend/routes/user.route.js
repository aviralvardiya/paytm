const express = require("express");
const { User } = require("../db");
const router = express.Router();
const z = require("zod")

router.post("/signup", async (req, res) => {
  // const user = new User(req.body)
  // const newUser =await user.save()
  const fetched = await User.findOne({ username: req.body.username });
  if (fetched) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  } else {
    const newUser = await User.create(req.body);
    res.send({ message: "user created", id: newUser.id });
  }
});

router.get("/signin", (req, res) => {
  res.send("you can signin here");
});

router.get("/update", (req, res) => {
  res.send("you can update here");
});

module.exports = router;

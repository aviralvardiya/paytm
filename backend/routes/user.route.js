const express = require("express");
const { User, Account } = require("../db");
const router = express.Router();
const z = require("zod");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares");
const mongoose = require("mongoose");

router.post("/signup", async (req, res) => {
  // const user = new User(req.body)
  // const newUser =await user.save()
  const UserObj = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(8),
  });

  const { success, data } = UserObj.safeParse(req.body);

  if (success) {
    const fetched = await User.findOne({ username: data.username });
    if (fetched) {
      res.status(411).json({
        message: "Email already taken / Incorrect inputs",
      });
    } else {
      const newUser = await User.create(data);
      const token = jwt.sign(
        { username: newUser.username },
        process.env.JWT_SECRET
      );
      res.status(201).send({ message: "user created", token: token });
    }
  } else {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

router.post("/signin", async (req, res) => {
  const userCreds = req.body;
  const fetchedUser = await User.findOne({ username: userCreds.username });
  console.log(fetchedUser);
  const userObj = z.object({
    username: z.string().email(),
    password: z.string().min(8),
  });
  const { success, data } = userObj.safeParse(userCreds);
  if (success) {
    if (fetchedUser) {
      if (fetchedUser.password == userCreds.password) {
        const token = jwt.sign(
          { username: fetchedUser.username },
          process.env.JWT_SECRET
        );
        res.status(200).send({ token: token });
      } else {
        res.status(404).json({
          message: "Error while logging in",
        });
      }
    } else {
      res.status(404).json({
        message: "Error while logging in",
      });
    }
  } else {
    res.status(404).json({
      message: "Error while logging in ekdum hi",
    });
  }
});

router.post("/update", authMiddleware, async (req, res) => {
  let userToBeUpdated = {};
  if (req.body.password) {
    userToBeUpdated["password"] = req.body.password;
  }
  if (req.body.firstName) {
    userToBeUpdated["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    userToBeUpdated["lastName"] = req.body.lastName;
  }
  if (userToBeUpdated.password && userToBeUpdated.password.length < 8) {
    res.status(441).json({ msg: "password too small" });
  }
  const updatedUser = await User.findOneAndUpdate(
    { username: req.username },
    userToBeUpdated,
    { returnDocument: "after" }
  );
  res.status(200).json({ msg: "user update", user: updatedUser });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const objId = mongoose.Types.ObjectId;
  const userId = (filter.length===24)? new objId(filter):new objId(0);
  const query = await User.find({
    $or: [{ firstName: filter }, { lastName: filter }, { _id: userId}],
  }).exec();
  if (query) {
    res.json({ users: query.map(user=>({
      userName:user.username,
      firstName:user.firstName,
      lastName:user.lastName,
      id:user.id
    })) });
  } else {
    res.json({ msg: "user not found" });
  }
});

module.exports = router;

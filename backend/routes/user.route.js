const express = require("express");
const { User } = require("../db");
const router = express.Router();
const z = require("zod");
const jwt = require("jsonwebtoken");

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
  const fetchedUser =await User.findOne({ username: userCreds.username });
  console.log(fetchedUser)
  const userObj = z.object({
    username:z.string().email(),
    password:z.string().min(8)
  })
  const {success,data} = userObj.safeParse(userCreds)
  if(success){
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
  }
  else{
    res.status(404).json({
      message: "Error while logging in ekdum hi",
    });
  }
  
});

router.get("/update", (req, res) => {
  res.send("you can update here");
});

module.exports = router;

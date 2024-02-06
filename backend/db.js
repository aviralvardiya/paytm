const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: String,
  firstName: String,
  lastName: String,
});

exports.User = mongoose.model("User", userSchema);

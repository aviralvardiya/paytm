const jwt = require("jsonwebtoken");
const { User } = require("./db");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET,async (err, decoded) => {
    if (err) {
      res.status(403).json({ msg: "unauthorized" });
    } else {
      const fetchedUser = await User.findOne({username:decoded.username})
      req.userId=fetchedUser._id;
      req.username = decoded.username;
      console.log(req.username);
      next();
    }
  });
}

module.exports = authMiddleware;

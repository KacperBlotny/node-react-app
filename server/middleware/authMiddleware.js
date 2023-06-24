const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { client } = require("../databasepg");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token

      const query = "SELECT * FROM users WHERE userid = $1";
      const values = [decoded.id];
      const result = await client.query(query, values);

      delete result.rows[0].password;

      req.user = await result.rows[0];

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { client } = require('../databasepg');

// @desc  Register a new user
// /api/users
// @access Private

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  try {
    // Find if user already exists
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      res.status(400);
      throw new Error('User already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Add to database
    const insertQuery =
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING userid';
    const insertValues = [name, email, hashedPassword];
    const insertResult = await client.query(insertQuery, insertValues);

    res.status(201).json({
      userID: insertResult.rows[0].userid,
      name: name,
      email: email,
      token: generateToken(insertResult.rows[0].userid),
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Login user
// /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find if user already exists
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);

    const user = result.rows[0];

    // Check if user exists and compare passwords
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        userID: user.userid,
        name: user.name,
        email: user.email,
        token: generateToken(user.userid),
      });
    } else {
      res.status(400);
      throw new Error('Invalid credentials');
    }

    res.status(201).json({
      userID: insertResult.rows[0].userid,
      name: name,
      email: email,
      token: generateToken(insertResult.rows[0].userid),
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Get current user
// /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user.userid,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

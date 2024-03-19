const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = generateToken;

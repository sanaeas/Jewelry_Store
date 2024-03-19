const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

// Method to validate password
userSchema.methods.validPassword = async function (password) {
  try {
    const user_pwd = await bcrypt.hash(password, 10);
    return user_pwd === this.password;
  } catch (error) {
    console.error('Error validating password:', error);
    return false;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;

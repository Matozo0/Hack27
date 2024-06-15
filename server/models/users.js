const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('node:crypto');

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    usuario: { type: String, required: true },
    senha: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');

const Users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
    ref: 'Role'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('UsersSchema', Users);
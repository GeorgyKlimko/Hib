import mongoose from "mongoose";

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

export default mongoose.model('UsersSchema', Users);
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  bio: {
    type: String,
    required: true
  },

  github: String,

  linkedin: String,

  resume: String
});

module.exports = mongoose.model("Profile", profileSchema);
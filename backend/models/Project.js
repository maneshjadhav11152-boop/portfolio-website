const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,

  description: String,

  image: String,

  github: String,

  liveDemo: String,

  technologies: [String]
});

module.exports = mongoose.model("Project", projectSchema);
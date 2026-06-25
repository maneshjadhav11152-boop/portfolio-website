const Skill = require("../models/Skill");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    res.json(skills);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = { getSkills };
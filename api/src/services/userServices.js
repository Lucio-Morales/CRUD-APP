const { User } = require("../db");

const createNewUser = async (name, email, password, userType) => {
  const newUser = await User.create({ name, email, password, userType });
  return newUser;
};

module.exports = {
  createNewUser,
};

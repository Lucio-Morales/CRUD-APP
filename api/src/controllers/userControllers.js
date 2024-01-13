const { userServices } = require("../services");

const postUser = async (req, res) => {
  const { name, email, password, userType } = req.body;
  try {
    const response = await userServices.createNewUser(
      name,
      email,
      password,
      userType
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postUser };

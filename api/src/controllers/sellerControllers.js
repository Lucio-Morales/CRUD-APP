const { sellerServices } = require("../services");

const postSeller = async (req, res) => {
  const { name, email } = req.body;
  try {
    const response = await sellerServices.createSeller(name, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postSeller };

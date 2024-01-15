const { storeServices } = require("../services");

const postStore = async (req, res) => {
  const { name, sellerId } = req.body;

  try {
    const response = await storeServices.createStore(name, sellerId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postStore };

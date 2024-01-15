const { buyerServices } = require("../services");

// 1. Crea un Buyer en la DB
const postBuyer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = await buyerServices.createNewBuyer(name, email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postBuyer };

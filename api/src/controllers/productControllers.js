const { productServices } = require("../services");

const postProduct = async (req, res) => {
  const { name, stock } = req.body;

  try {
    const response = await productServices.createProduct(name, stock);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProduct };

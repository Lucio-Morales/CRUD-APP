const { productServices } = require("../services");

const postProduct = async (req, res) => {
  const { name, stock, storeId } = req.body;
  console.log(storeId);
  try {
    const response = await productServices.createProduct(name, stock, storeId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProduct };

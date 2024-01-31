const { productServices } = require("../services");

const postProduct = async (req, res) => {
  const { name, stock, storeId } = req.body;

  try {
    const response = await productServices.createProduct(name, stock, storeId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await productServices.getAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllInStore = async (req, res) => {
  const { storeId } = req.params;
  try {
    const response = await productServices.findInStore(storeId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProduct, getAllInStore, getAllProducts };

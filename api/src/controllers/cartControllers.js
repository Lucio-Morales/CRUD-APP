const { cartServices } = require("../services");

// 1. Recibe userId y busca su carrito de compras
const getUserCart = async (req, res) => {
  const { userId } = req.query;
  try {
    const response = await cartServices.findUserCart(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 2. Recibe un cartId y busca todos sus productos
const getProductsCart = async (req, res) => {
  const { cartId } = req.params;
  try {
    const response = await cartServices.findAllProducts(cartId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProductsCart, getUserCart };

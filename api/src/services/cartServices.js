const { Cart } = require("../db");
const { Product } = require("../db");

// 1. Recibe el id de un usuario y busca su carrito de compras
const findBuyerCart = async (buyerId) => {
  const userCart = await Cart.findOne({ where: { BuyerId: buyerId } });
  if (userCart.BuyerId) return userCart;
};
// 2. Recibe un cartId y busca todos sus productos
const findAllProducts = async (cartId) => {
  const cart = await Cart.findByPk(cartId, {
    include: Product,
  });
  return cart;
};

const addProduct = async (buyerId, productId, quantity = 1) => {
  const cart = await Cart.findOne({
    where: {
      BuyerId: buyerId,
    },
    include: Product,
  });
  const product = await Product.findByPk(productId);

  const existingCartItem = cart.Products.find((item) => item.id === productId);

  if (existingCartItem) {
    existingCartItem.CartProduct.quantity += quantity;
    await existingCartItem.CartProduct.save();
  } else {
    await cart.addProduct(product, { through: { quantity } });
  }
  return cart;
};

module.exports = { findBuyerCart, findAllProducts, addProduct };

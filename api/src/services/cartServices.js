const { Cart } = require("../db");
const { Product } = require("../db");

// 1. Recibe el id de un usuario y busca su carrito de compras
const findUserCart = async (userId) => {
  const userCart = await Cart.findOne({ where: { UserId: userId } });
  if (userCart.UserId) return userCart;
};
// 2. Recibe un cartId y busca todos sus productos
const findAllProducts = async (cartId) => {
  const cart = await Cart.findByPk(cartId, {
    include: Product,
  });
  return cart;
};

module.exports = { findUserCart, findAllProducts };

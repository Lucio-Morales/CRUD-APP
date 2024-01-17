const { Cart, Product } = require("../db");

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

const addProduct = async (buyerId, productId, quantity) => {
  const product = await Product.findByPk(productId); // Busco el Product que el Buyer quiere agregar a su carrito
  if (!product || product.dataValues.stock < quantity) {
    return { msg: "Stock insuficiente." };
  }
  console.log(product.dataValues);
  const buyerCart = await findBuyerCart(buyerId); // Busco el Cart del Buyer
  console.log(buyerCart.dataValues);
  await buyerCart.addProduct(product, { through: { quantity: quantity } });
  // const productsInCart = await buyerCart.getProducts();
  // console.log(productsInCart);
};

const removeProductFromCart = async (productId, buyerId) => {
  const buyerCart = await findBuyerCart(buyerId);
  console.log(buyerCart.dataValues);
  // Verificar si el producto está en el carrito
  const productInCart = await Product.findByPk(productId);
  console.log(productInCart.dataValues);

  await buyerCart.removeProduct(productInCart);
  return { msg: "Producto removido del carrito con exito" };
};

module.exports = {
  findBuyerCart,
  findAllProducts,
  addProduct,
  removeProductFromCart,
};

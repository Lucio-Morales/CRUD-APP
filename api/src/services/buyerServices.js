const { Buyer } = require("../db");

// 1. Crea un usuario en la DB
const createNewBuyer = async (name, email, password) => {
  const newBuyer = await Buyer.create({ name, email, password });
  if (newBuyer.id) {
    const newCart = await newBuyer.createCart();
    newBuyer.dataValues.cartId = newCart.id;
    return newBuyer;
  }
};

module.exports = {
  createNewBuyer,
};

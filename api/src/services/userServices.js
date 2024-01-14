const { User } = require("../db");

// 1. Crea un usuario en la DB
const createNewUser = async (name, email, password, userType) => {
  const newUser = await User.create({ name, email, password, userType });
  if (newUser.id && userType === "Buyer") {
    const newCart = await newUser.createCart();
    newUser.dataValues.cartId = newCart.id;
    return newUser;
  }
};

module.exports = {
  createNewUser,
};

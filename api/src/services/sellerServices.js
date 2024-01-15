const { Seller } = require("../db");

const createSeller = async (name, email) => {
  const newSeller = await Seller.create({ name, email });
  return newSeller;
};

module.exports = { createSeller };

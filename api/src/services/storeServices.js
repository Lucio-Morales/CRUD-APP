const { Store, Seller } = require("../db");

const createStore = async (name, sellerId) => {
  const seller = await Seller.findByPk(sellerId);

  if (seller) {
    const newStore = await Store.create({ name, SellerId: sellerId });
    return newStore;
  }
};

module.exports = { createStore };

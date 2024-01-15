const { Product, Store } = require("../db");

const createProduct = async (name, stock, storeId) => {
  const store = await Store.findByPk(storeId);

  if (store) {
    const newProduct = await Product.create({ name, stock, StoreId: storeId });

    return newProduct;
  }
};

module.exports = { createProduct };

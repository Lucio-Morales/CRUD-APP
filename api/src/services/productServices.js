const { Product } = require("../db");

const createProduct = async (name, stock) => {
  const newProduct = await Product.create({ name, stock });
  return newProduct;
};

module.exports = { createProduct };

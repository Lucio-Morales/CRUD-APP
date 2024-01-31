const { Product, Store } = require("../db");

const createProduct = async (name, stock, storeId) => {
  const store = await Store.findByPk(storeId);

  if (store) {
    const newProduct = await Product.create({ name, stock, StoreId: storeId });

    return newProduct;
  }
};

const getAll = async () => {
  const allProducts = await Product.findAll();
  if (allProducts) return allProducts;
};

const findInStore = async (storeId) => {
  const allProducts = await Product.findAll({ where: { StoreId: storeId } });
  if (!allProducts.length) return { msg: "Esta store no tiene productos aún" };
  if (allProducts) return allProducts;
};

module.exports = { createProduct, findInStore, getAll };

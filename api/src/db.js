require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Buyer, Seller, Cart, Store, Product } = sequelize.models;

// Relacion de 1 a 1
Buyer.hasOne(Cart); //Un Buyer puede tener un Cart
Cart.belongsTo(Buyer); //Un Cart pertenece a un Buyer

// Relacion de 1 a muchos
Store.belongsTo(Seller); // Una Store pertenece a un Seller
Seller.hasMany(Store); // Un Seller puede tener muchas Stores

// Relacion de 1 a muchos
Store.hasMany(Product); // Una store puede tener muchos Products
Product.belongsTo(Store); // Un producto pertenece a una tienda

// Relacion de muchos a muchos
Product.belongsToMany(Cart, { through: "CartProduct" }); // Un Product puede estar en multiples Carts
Cart.belongsToMany(Product, { through: "CartProduct" }); // Un Cart puede tener multiples Products

module.exports = { conn: sequelize, ...sequelize.models };

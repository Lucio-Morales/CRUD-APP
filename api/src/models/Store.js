const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Store",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

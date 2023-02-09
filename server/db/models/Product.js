const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  inventoryQty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue : 0,
  },
  photoUrl: {
    type: Sequelize.TEXT,
  },
})

module.exports = Product

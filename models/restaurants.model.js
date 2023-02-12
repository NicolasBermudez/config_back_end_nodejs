const { DataTypes } = require('sequelize')
const { db } = require('../dataBase/db')

const Restaurants = db.define('restaurants', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNum: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  rating: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: true,
      min: 1,
      max: 5,
    },
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
    enum: ['active', 'inactive'],
  },
})

module.exports = Restaurants

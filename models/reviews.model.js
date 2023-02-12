const { dataTypes } = require('sequelize')
const { db } = require('../dataBase/db')

const Reviews = db.define('reviews', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: dataTypes.INTEGER,
  },

  userId: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },

  comment: {
    type: dataTypes.STRING,
    allowNull: false,
  },

  restaurantId: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },

  rating: {
    type: dataTypes.INTEGER,
    validate: {
      isInt: true,
      min: 1,
      max: 5,
    },
  },
})

module.exports = Reviews

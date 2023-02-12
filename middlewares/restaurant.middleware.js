const Restaurants = require('../models/restaurants.model')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

exports.validExistRestaurant = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const restaurant = await Restaurants.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  if (!restaurant) {
    return next(new AppError('Restaurant not found', 404))
  }

  req.restaurant = restaurant
  next()
})

const Restaurants = require('../models/restaurants.model')
const catchAsync = require('../utils/catchAsync')

exports.createRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body

  const newRestaurant = await Restaurants.create({ name, address, rating })

  res.status(201).json({
    status: 'success',
    message: 'Restaurant created successfully',
    newRestaurant,
  })
})

exports.findAllRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurants.findAll({
    where: {
      status: 'active',
    },
  })

  res.status(200).json({
    status: 'success',
    message: 'Restaurats fetched successfully',
    restaurants,
  })
})

exports.findRestaurant = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const restaurant = await Restaurants.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  res.status(200).json({
    status: 'success',
    message: 'Restaurat fetched successfully',
    restaurant,
  })
})

exports.updateRestaurant = catchAsync(async (req, res, next) => {
  const { name, address } = req.body

  const { id } = req.params

  const restaurant = await Restaurants.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  await restaurant.update({
    name,
    address,
  })

  res.status(200).json({
    status: 'success',
    message: 'Update restaurant successfully',
    restaurant,
  })
})

exports.deleteRestaurant = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const restaurant = await Restaurants.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  await restaurant.update({ status: 'inactive' })

  res.status(200).json({
    status: 'success',
    message: 'Delete restaurant successfully',
  })
})

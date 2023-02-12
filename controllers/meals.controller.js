const Meals = require('../models/meals.model')
const catchAsync = require('../utils/catchAsync')

exports.newMeals = catchAsync(async (req, res, next) => {
  const { restaurant } = req

  const { name, price } = req.body

  const newMeals = await Meals.create({
    name,
    price,
    restaurantId: restaurant.id,
  })

  res.status(201).json({
    status: 'success',
    message: 'Meals created successfully',
    newMeals,
  })
})

exports.findAllMeals = catchAsync(async (req, res, next) => {
  const allMeals = await Meals.findAll({
    where: {
      status: 'active',
    },
  })

  res.status(200).json({
    status: 'success',
    message: 'Meals fetched successfully',
    allMeals,
  })
})

exports.findMeals = catchAsync(async (req, res, next) => {
  const { meals } = req

  res.status(200).json({
    status: 'success',
    message: 'Meals was found successfully',
    meals,
  })
})

exports.updateMeals = catchAsync(async (req, res, next) => {
  const { meals } = req

  const { name, price } = req.body

  await meals.update({ name, price })

  res.status(200).json({
    status: 'success',
    message: 'Meals updated successfully',
  })
})

exports.disableMeals = catchAsync(async (req, res, next) => {
  const { meals } = req

  await meals.update({ status: 'inactive' })

  res.status(200).json({
    status: 'success',
    message: 'Meals disable successfully',
  })
})

const Meals = require('../models/meals.model')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

exports.validExistMeals = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const { mealId } = req.body

  const meals = await Meals.findOne({
    where: {
      id: id || mealId,
      status: 'active',
    },
  })

  if (!meals) {
    return next(new AppError('Meals not found', 404))
  }

  req.meals = meals
  next()
})

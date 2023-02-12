const Orders = require('../models/order.model')
const catchAsync = require('../utils/catchAsync')

exports.newOrder = catchAsync(async (req, res, next) => {
  const { quantity, userId } = req.body

  const { meals } = req

  const order = await Orders.create({
    quantity,
    mealId: meals.id,
    userId,
    totalPrice: meals.price * quantity,
  })

  res.status(201).json({
    status: 'success',
    message: 'Order create successfully',
    order,
  })
})

exports.allOrderUser = catchAsync(async (req, res, next) => {})

exports.completedOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const order = await Orders.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  await order.update({ status: 'completed' })

  res.status(200).json({
    status: 'success',
    message: 'Order completed successfully',
  })
})

exports.cancelledOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const order = await Orders.findOne({
    where: {
      id,
      status: 'active',
    },
  })

  await order.update({ status: 'cancelled' })

  res.status(200).json({
    status: 'success',
    message: 'Order cancelled successfully',
  })
})

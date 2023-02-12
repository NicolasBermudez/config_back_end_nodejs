const { Router } = require('express')
const {
  newOrder,
  allOrderUser,
  completedOrder,
  cancelledOrder,
} = require('../controllers/orders.controllers')
const { protect } = require('../middlewares/auth.middleware')
const { validExistMeals } = require('../middlewares/meals.middlewares')

const router = Router()

router.use(protect)

router.post('/', validExistMeals, newOrder)

router.get('/me', allOrderUser)

router.patch('/:id', completedOrder)

router.delete('/:id', cancelledOrder)

module.exports = { orderRouter: router }

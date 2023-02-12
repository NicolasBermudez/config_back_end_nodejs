const { Router } = require('express')
const {
  createRestaurant,
  findAllRestaurants,
  findRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurants.controllers')
const { protect } = require('../middlewares/auth.middleware')

const router = Router()

router.get('/', findAllRestaurants)

router.get('/:id', findRestaurant)

router.use(protect)

router.post('/', createRestaurant)

router.patch('/:id', updateRestaurant)

router.delete('/:id', deleteRestaurant)

router.post('/reviews/:id')

router.patch('reviews/:restaurantId/:id')

router.delete('/reviews/:restaurantId/:id')

module.exports = { restaurantsRouter: router }

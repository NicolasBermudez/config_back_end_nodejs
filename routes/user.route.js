const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser } = require('../controllers/auth.controller')
const { updateUser, deleteUser } = require('../controllers/user.controller')
const {
  protect,
  protectAccountOwer,
} = require('../middlewares/auth.middleware')
const {
  validIfExistUserEmail,
  validIfExistUser,
} = require('../middlewares/user.middleware')

const router = Router()

router.post('/signup', validIfExistUserEmail, createUser)

router.post('/login', loginUser)

router.use(protect)

router.patch('/:id', validIfExistUser, protectAccountOwer, updateUser)

router.delete('/:id', validIfExistUser, protectAccountOwer, deleteUser)

router.get('/orders')

router.get('/orders/:id')

module.exports = { usersRouter: router }

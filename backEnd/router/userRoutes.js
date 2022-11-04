const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getMe,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)

router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

router.get('/me', protect,  getMe)

module.exports = router

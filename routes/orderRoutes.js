const express = require('express');

const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getOrdersHistory,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.route('/').post(protect, addOrderItems);
router.route('/orders-history').get(protect, getOrdersHistory);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;

const express = require('express');
const {
  createApparel,
  getApparelByUser,
} = require('../controllers/apparelController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createApparel).get(protect, getApparelByUser);

module.exports = router;

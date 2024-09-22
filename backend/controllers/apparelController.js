// controllers/apparelController.js
const asyncHandler = require('express-async-handler');
const Apparel = require('../models/Apparel');

// @desc    Create a new apparel submission
// @route   POST /api/apparel
// @access  Private
const createApparel = asyncHandler(async (req, res) => {
  const { type, condition, preferredAction } = req.body;

  const apparel = new Apparel({
    user: req.user._id,
    type,
    condition,
    preferredAction,
  });

  const createdApparel = await apparel.save();
  res.status(201).json(createdApparel);
});

// @desc    Get all apparel submissions for a user
// @route   GET /api/apparel
// @access  Private
const getApparelByUser = asyncHandler(async (req, res) => {
  const apparel = await Apparel.find({ user: req.user._id });
  res.json(apparel);
});

module.exports = { createApparel, getApparelByUser };

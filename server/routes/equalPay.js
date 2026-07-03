const express = require("express");
const router = express.Router();
const EqualPay = require("../models/EqualPay");

// @desc    Get all equal pay metrics
// @route   GET /api/equal-pay
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const equalPayData = await EqualPay.find();
    res.json(equalPayData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

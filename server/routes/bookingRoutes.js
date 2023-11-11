const express = require('express');
const {protect} = require('../controllers/authController')
const {getCheckOutSession} = require('../controllers/bookingController')
const router = express.Router();

router.get('/checkout-session/:tourSlug', protect, getCheckOutSession)

module.exports = router;
const express = require('express');

const router = express.Router();

const itemDescriptionRouter = require('./item-description');
const productDisplayRouter = require('./product-display');
const customerReviewRouter = require('./customer-reviews');

router.use(productDisplayRouter);
router.use(itemDescriptionRouter);
router.use(customerReviewRouter);

module.exports = router;

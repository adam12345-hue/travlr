const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// All trips
router.get('/trips', tripsController.tripsList);

// One trip — plural URL
router.get(
    '/trips/:tripCode',
    tripsController.tripsFindByCode
);

// One trip — singular URL used by the current page
router.get(
    '/trip/:tripCode',
    tripsController.tripsFindByCode
);

module.exports = router;
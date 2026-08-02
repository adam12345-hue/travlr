var express = require('express');
var router = express.Router();

// Display all trips
router.get('/', async function (req, res, next) {
    try {
        const apiUrl =
            `${req.protocol}://${req.get('host')}/api/trips`;

        const response = await fetch(apiUrl);
        const trips = await response.json();

        console.log('TRIPS LOADED:', trips.length);

        res.render('travel', {
            title: 'Travlr Getaways',
            trips: trips
        });
    } catch (error) {
        next(error);
    }
});

// Display one trip
router.get('/:tripCode', async function (req, res, next) {
    try {
        const apiUrl =
            `${req.protocol}://${req.get('host')}` +
            `/api/trips/${req.params.tripCode}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            const error = new Error('Trip not found');
            error.status = response.status;
            throw error;
        }

        const trip = await response.json();

        res.render('trip', {
            title: trip.name,
            trip: trip
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
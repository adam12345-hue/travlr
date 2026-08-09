const express = require('express');
const router = express.Router();
const Trip = require('../../app_api/models/travlr');

router.get('/trip/:code', async function (req, res, next) {
    try {
        const trip = await Trip.findOne({ code: req.params.code });

        if (!trip) {
            return res.status(404).send("Trip not found");
        }

        res.render('trip', {
            title: 'Travlr | Trip Details',
            trip: trip
        });

    } catch (err) {
        next(err);
    }
});

module.exports = router;
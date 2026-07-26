var fs = require('fs');
vartrips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = function (req, res) {
    res.render('travel');
};

module.exports = {
    travel
};

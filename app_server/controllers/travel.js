const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = function (req, res) {
    res.render('travel', {title: 'Travlr Getaways', trips);
};

module.exports = {
    travel
};

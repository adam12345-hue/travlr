const index = function (req, res) {
    res.render('index', {
        title: 'Travlr'
    });
};

module.exports = {
    index
};
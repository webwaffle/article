var fs = require('fs');
module.exports = function(req, res) {
    res.type('application/json');
    res.send(fs.readFileSync('data/articles.json'));
}
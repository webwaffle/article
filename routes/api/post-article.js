var fs = require('fs');
var moment = require('moment');
module.exports = function(req, res) {
    //console.log(req);
    var articles = JSON.parse(fs.readFileSync('data/articles.json'));
    if(articles[0]) {
        var id = articles.reverse()[0].id + 1;
    } else {
        var id = 0;
    }
    articles.push({
        id: id,
        name: req.body.name,
        description: req.body.desc,
        body: req.body.body,
        time: moment().format("MM-DD-YYYY h:mm:ss a")
    });
    fs.writeFileSync('data/articles.json', JSON.stringify(articles, undefined, 2));
    res.send('success');
}
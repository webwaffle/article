var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var fs = require('fs');
var moment = require('moment');
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});

var app = express();
app.use(express.static(__dirname + '/static'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
var options = {
    secret: 'yee',
    resave: false,
    saveUninitialized: false,
    store: new FileStore,
    cookie: {
        maxAge: 3600000,
        secure: false,
        httpOnly: true
    },
    name: 'my.connect.sid'
}
app.use(session(options));

app.set('port', process.env.PORT || 3000);



var routes = require('./routes');
for(var i = 0; i < routes.length; i++) {
    app[routes[i].method.toLowerCase()](routes[i].route, require('./routes/' + routes[i].controller_name));
}




app.listen(app.get('port'));
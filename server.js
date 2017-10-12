var express = require('express'),
    app = express(),
    compileSass = require('express-compile-sass'),
    path = require("path"),
    root = process.cwd();

var expressGoogleAnalytics = require('express-google-analytics');
var mailService = require('./services/email.service');
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index');
});

app.use(compileSass({
    root: root + '/public',
    sourceMap: true, // Includes Base64 encoded source maps in output css 
    sourceComments: true, // Includes source comments in output css 
    watchFiles: true, // Watches sass files and updates mtime on main files for each change 
    logToConsole: false // If true, will log to console.error on errors 
}));

app.use(express.static('public'));
// app.use('/images',express.static(path.join(__dirname, 'public/images')));
// app.use('/js',express.static(path.join(__dirname, 'public/js')));
// app.use('/styles',express.static(path.join(__dirname, 'public/styles')));


app.set("view engine", "jade");

var server = app.listen(8088, function () {
    console.log("Example app listening at http://localhost:8088/")
});

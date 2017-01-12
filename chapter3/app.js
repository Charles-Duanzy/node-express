/**
 * app.js
 */
var express = require('express');
var fortune = require('./lib/fortune');
var app = express();
var bodyParser = require('body-parser');
/*设置handlebars视图引擎*/
var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/*设置端口*/
app.set('port', process.env.PORT || 3000);

/*设置static中间件*/
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

/*主页*/
app.get('/', function (req, res) {
    res.cookie('user', 'ceshi');
    var obj = {
        message: 'welcome my home page'
    };
    res.render('home', {information: obj});


    // res.redirect(302, '/about');
    //var html = "<div>hello world</div>";

    // res.json(200,jsonStr);
    //res.status(200).send(html);
});
/*about页面*/
app.get('/about', function (req, res) {
    res.render('about', {fortune: fortune.getFortune()});
});

/*纯文本页面*/
app.get('/txt', function (req, res) {
    res.type('text/plain');
    res.send('this is a test');
});

/*提交表单数据*/
app.post('/submitForm', function (req, res) {
    console.log('params', req.params);
    console.log('query', req.query);
    console.log('body', req.body);

});
/*请求数据*/
app.get('/getSomeData', function (req, res) {
    var jsonStr = {
        "name": "chapter3",
        "version": "1.0.0",
        "description": "this is example demo",
        "main": "app.js",
        "author": "charles",
        "license": "MIT"
    };
    res.json(jsonStr);
});

//404 page
app.use(function (req, res) {
    res.status(404).render('404');
});

//500 page
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).render('500');
});
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + ';');
});

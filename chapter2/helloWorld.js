/**
 * helloWorld
 */
var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode){
        responseCode =200;
    }
    fs.readFile(__dirname + path,function (err, data) {
        console.log(__dirname);
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('500 - Internal Error');
        }else{
            res.writeHead(responseCode,{'Content-Type':contentType});
            res.end(data);
        }
    })
}

http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    if (path == '/about') {
        serveStaticFile(res,'/public/about.html','text/html');
    } else if (path === "") {
        serveStaticFile(res,'/public/home.html','text/html');
    } else if(path == '/img'){
        serveStaticFile(res,'/img/logo.jpeg','image/jpeg');
    }
    else {
        serveStaticFile(res,'/public/notFound.html','text/html',404);
    }

}).listen(3000);

console.log('server listening port 3000');
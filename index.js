const http = require('http');

let like = false;

http.createServer(function (req, res) {
    switch(req.url) {
        case '/like':
            like = true;
        break;
        case '/dislike':
            like = false;
        break;
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(JSON.stringify({like: like}));
    res.end();

}).listen(3000);
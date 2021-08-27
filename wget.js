const http = require('http');
const url = require('url');
const util = require('util');

const argUrl = process.argv[2];
const parsedUrl = url.parse(argUrl, true);

const options = {
    host: parsedUrl.hostname,
    post: parsedUrl.port,
    path: parsedUrl.pathname,
    method: 'GET',
}


if (parsedUrl.search) {
    options.path += "?" + parseUrl.search;
}

const req = http.request(options);
req.on('response', res => {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + util.inspect(req.headers));
    res.setEncoding('utf8');
    res.on('data', chunk => {
        console.log('BODY: ' + chunk.toString());
    });
    res.on('error', err => {
        console.log('RESPONSE ERROR: ' + err)
    })
})

req.on('error', err => {
    console.log('REQUEST ERROR: ' + err)
})
req.end();
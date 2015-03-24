/**
 * Created by Magador on 23/03/2015.
 */
"use strict";

var proxy = require('http-proxy').createServer({}),
    forward = JSON.parse(require('fs').readFileSync('forward.json', {encoding: 'utf8'})),
    http = require('http'),
    port = 80;

http.createServer(function(req, res) {
    proxy.web(req, res, {target: forward[require('url').parse('http://'+req.headers.host).hostname]});
}).listen(port, function(err) {
    if(err) {
        return console.error(err);
    }
    console.info("Proxy started listening on port "+ port +" for : "+ Object.keys(forward).toString());

});
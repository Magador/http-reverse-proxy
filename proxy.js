/**
 * Created by Magador on 23/03/2015.
 */
"use strict";

var forward = JSON.parse(require('fs').readFileSync('forward.json', {encoding: 'utf8'}));

var redbird = require('redbird')({
  port: 80,
  secure: false,
  ssl: {
    port: 443,
    key: "certs/dev-key.pem",
    cert: "certs/dev-cert.pem"
  }
});

for(let link of forward.hosts) {
  let opts = {
    ssl: link.ssl
  };
  redbird.register(link.host, link.target, opts);
}

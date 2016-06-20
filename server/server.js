'use strict';

const LATENCY_ENABLED = false;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => setTimeout(next, LATENCY_ENABLED ? 3000 : 0));

app.use(function (req, res, next) {
  console.log((new Date()) + ': ', req.method + ' ==> ' + req.url);
  if (Object.keys(req.body).length) {
    console.log('BODY: ==> ', req.body);
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  return next();
});


let visitorCount = 0;

app.route('/visitors')
  .post((req, res) => {
    visitorCount++;
    res.send(JSON.stringify({count: visitorCount}));
  })
  .get((req, res) => {
    res.send({count: visitorCount});
  });

const port = process.argv[2] || 3000;
app.listen(port);
console.log('listening on http://localhost:' + port + '...');


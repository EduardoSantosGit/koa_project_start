'use strict'

var route = require('koa-route');

let route_index = require('../controller/index');

exports.init = function (app) {   
  app.use(route.post('/index', route_index.index));
};
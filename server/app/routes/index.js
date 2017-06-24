'use strict'

var route = require('koa-route');

exports.init = function (app) {   
  app.use(route.get('/index', index));
};

async function index(ctx) {
    ctx.body = "Pagina Inicial"; 
}

'use strict'

const Koa = require('koa');
const koaConfig = require('./server/config/koa');
const app = new Koa();

module.exports = app;

app.init = async function(){

    koaConfig(app);

    app.listen(3000);
}


if (!module.parent) {
  app.init().catch(function (err) {
    console.error(err);
    process.exit(1);
  });
}
'use strict'

const bodyParser = require('koa-bodyparser');
const fs = require('fs');

module.exports = function (app) {

    app.use(bodyParser());

    require('../app/routes/index').init(app);

fs.readdirSync('./server/app/routes').forEach(function (file) {
    require('../app/routes/' + file).init(app);
});

}    
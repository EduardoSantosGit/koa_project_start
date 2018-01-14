var api = {};

api.index = async function (ctx) {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
}

module.exports = api;
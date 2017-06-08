const serve = require('koa-static');
const Koa = require('koa');
const Cors = require("kcors");
const app = new Koa();

// $ GET /package.json
app.use(Cors());
app.use(serve('.'));

app.listen(8000);

console.log("App listening on port 8000");

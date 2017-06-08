const serve = require('koa-static');
const Koa = require('koa');
const Cors = require("kcors");
const app = new Koa();

// $ GET /package.json

app.use(Cors());

app.use(serve(__dirname));
app.use(serve(`${__dirname}/html`));
app.use(serve(`${__dirname}/css`));
app.use(serve(`${__dirname}/images`));
app.use(serve(`${__dirname}/json`));

app.listen(8000);

console.log("App listening on port 8000");

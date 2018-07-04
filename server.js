import Koa from 'koa';
import mongoose from 'mongoose';
const app = new Koa();

// Connect to database
mongoose
  .connect('mongodb://localhost:27017/koa-item')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

import Koa from 'koa';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import routing from './routes/items';

// Connect to database
mongoose
  .connect('mongodb://localhost:27017/koa-item')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Create Koa Application
const app = new Koa();

app
  .use(logger())
  .use(bodyParser())
  .use(helmet());

//routing(app);

app.listen(3000, () =>
  console.log(`✅  The server is running at http://localhost:3000/`)
);

export default app;

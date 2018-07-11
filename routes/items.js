import Router from 'koa-router';
import ItemControllers from '../controllers/items';

const router = new Router();

router.get('/', ItemControllers.findAll);

export default router;

import Router from 'koa-router';
import ItemControllers from '../controllers/items';

const router = new Router();

router.get('/', ItemControllers.findAll);
router.post('/items', ItemControllers.create);
router.put('/items/:id', ItemControllers.update);
router.delete('items/:id', ItemControllers.destroy);

export default router;

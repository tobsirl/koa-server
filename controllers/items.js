import Item from '../model/Item';

async function findAll(ctx) {
  // Fetch all Item's from the database and return as payload
  const items = await Item.find({});
  ctx.body = items;
}

async function create(ctx) {
  // Create New Item from payload sent and save to database
  const newItem = new Item(ctx.request.body);
  const savedItem = await newItem.save();
  ctx.body = savedItem;
}

async function destroy(ctx) {
  // Get id from url parameters and find Items in database
  const id = ctx.params.id;
  const item = await Item.findById(id);

  // Delete item from database and return deleted object as reference
  const deletedItem = await item.remove();
  ctx.body = deletedItem;
}

async function update(ctx) {
  // Find Item based on id, then toggle done on/off
  const id = ctx.params.id;
  const item = await Item.findById(id);
  item.done = !item.done;

  // Update item in database
  const updatedItem = await item.save();
  ctx.body = updatedItem;
}

export default {
  findAll,
  create,
  destroy,
  update
};

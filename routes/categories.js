const categoriesRouter = require('express').Router();

const {findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory, checkIsCategoryExists} = require('../middlewares/categories');
const {sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
  ); 

  categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
const categoriesRouter = require('express').Router();

const {findAllCategories, findCategoryById, createCategory, updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists} = require('../middlewares/categories');
const {sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);

  categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
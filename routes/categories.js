const categoriesRouter = require('express').Router();

const {findAllCategories, findCategoryById, createCategory, updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists} = require('../middlewares/categories');
const {sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted, sendAllCategories} = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth")

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.get("/categories", findAllCategories, sendAllCategories)

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
); 

module.exports = categoriesRouter;
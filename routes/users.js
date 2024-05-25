const usersRouter = require('express').Router();

const {findAllUsers, findUserById,checkIsUserExists,
  checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, createUser, updateUser, deleteUser} = require('../middlewares/users');
const {sendUserById,  sendUserCreated, sendUserUpdated, sendUserDeleted} = require('../controllers/users');

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);

  usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
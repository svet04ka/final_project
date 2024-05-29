const usersRouter = require('express').Router();

const { findAllUsers, findUserById,checkIsUserExists,
  checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, 
  createUser, updateUser, deleteUser, hashPassword } = require('../middlewares/users');
const { sendUserById,  sendUserCreated, sendUserUpdated, sendUserDeleted,
  sendMe, 
  sendAllUsers} = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth")

usersRouter.get("/users/:id", findAllUsers, findUserById, sendUserById, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
); 

module.exports = usersRouter;
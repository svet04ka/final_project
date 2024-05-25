const usersRouter = require('express').Router();

const {findAllUsers, findUserById, createUser, updateUser, deleteUser} = require('../middlewares/users');
const {sendUserById,  sendUserCreated, sendUserUpdated, sendUserDeleted} = require('../controllers/users');

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
  ); 

  usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
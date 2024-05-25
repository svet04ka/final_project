const gamesRouter = require('express').Router();

const {findAllGames, findGameById, createGame, updateGame, checkEmptyFields, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable,} = require('../middlewares/games');
const {sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted }= require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
); 

  gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  ); 
  
module.exports = gamesRouter; 
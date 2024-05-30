const gamesRouter = require('express').Router();

const {findAllGames, findGameById, createGame, updateGame, checkIsGameExists, checkEmptyFields, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsVoteRequest} = require('../middlewares/games');
const {sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted, sendAllGames } = require('../controllers/games');
const {checkAuth} = require("../middlewares/auth")

gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
); 

  gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    checkAuth,
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  ); 
  
module.exports = gamesRouter; 
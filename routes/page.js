const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js")
const { sendDashboard } = require('../controllers/auth.js')

pagesRouter.get("/", sendIndex); 
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

module.exports = pagesRouter;
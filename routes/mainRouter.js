const { Router } = require("express");
const mainRouter = Router();
const mainController = require("../controllers/mainController");

mainRouter.get("/", mainController.getPosts);

module.exports = mainRouter;
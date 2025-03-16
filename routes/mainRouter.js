const { Router } = require("express");
const mainRouter = Router();
const mainController = require("../controllers/mainController");
const signupController = require("../controllers/signupController");

mainRouter.get("/", mainController.getPosts);

mainRouter.get("/signup", signupController.getForm);
mainRouter.post("/signup", signupController.postUser);

module.exports = mainRouter;
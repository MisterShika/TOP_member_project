const { Router } = require("express");
const passport = require("passport");
const mainRouter = Router();
const mainController = require("../controllers/mainController");
const signupController = require("../controllers/signupController");
const signinController = require("../controllers/signinController");

mainRouter.get("/", mainController.getPosts);

mainRouter.get("/signup", signupController.getForm);
mainRouter.post("/signup", signupController.postUser);

mainRouter.get("/signin", signinController.getSignIn);
mainRouter.post("/signin",
    passport.authenticate("local", {
        successRedirect: "/right",
        failureRedirect: "/wrong"
    })
);

module.exports = mainRouter;
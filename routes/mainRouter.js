const { Router } = require("express");
const passport = require("passport");
const mainRouter = Router();
const mainController = require("../controllers/mainController");
const signupController = require("../controllers/signupController");
const signinController = require("../controllers/signinController");
const postController = require("../controllers/postController");

mainRouter.get("/", mainController.getPosts);

mainRouter.get("/signup", signupController.getForm);
mainRouter.post("/signup", signupController.postUser);

mainRouter.get("/signin", signinController.getSignIn);
mainRouter.post("/signin",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
);

mainRouter.get("/signout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

mainRouter.get("/post", postController.getCreatePost);
mainRouter.post("/post", postController.postCreatePost);

module.exports = mainRouter;
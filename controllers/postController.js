const db = require("../db/queries");

async function getCreatePost (req, res) {
    res.render("post", {
        user: req.user
    }); 
}

async function postCreatePost (req, res) {
    const newPost = req.body;
    console.log(JSON.stringify(newPost, null, 2));
    const user = req.user;
    console.log(JSON.stringify(user, null, 2));
    db.addPost(user, newPost);
    res.redirect("/");
}

module.exports = {
    getCreatePost,
    postCreatePost
}
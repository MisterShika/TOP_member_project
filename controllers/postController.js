const db = require("../db/queries");

async function getCreatePost (req, res) {
    res.render("post", {
        user: req.user
    }); 
}

async function postCreatePost (req, res) {
    const newPost = req.body;
    const user = req.user;
    db.addPost(user, newPost);
    res.redirect("/");
}

async function postDeletePost (req, res) {
    const user = req.user;
    const deletePostId = req.body.id;

    if(user.is_admin == true){
        await db.deletePost(deletePostId);
    }
    res.redirect("/");
}

module.exports = {
    getCreatePost,
    postCreatePost,
    postDeletePost
}
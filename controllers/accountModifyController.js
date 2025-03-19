const db = require("../db/queries");

async function getForm (req, res) {
    res.render("secretPage", {
        user: req.user
    }); 
}

async function postForm (req, res) {
    const user = req.user;
    const magicWord = "magic";
    const {secretCode} = req.body;
    if(magicWord == secretCode){
        await db.switchMembership(user);
    }
    res.redirect("/");
}

module.exports = {
    getForm,
    postForm
}
const db = require("../db/queries");

async function getMembershipForm (req, res) {
    res.render("secretPage", {
        user: req.user
    }); 
}

async function postMembershipForm (req, res) {
    const user = req.user;
    const magicWord = "magic";
    const {secretCode} = req.body;
    if(magicWord == secretCode){
        await db.switchMembership(user);
    }
    res.redirect("/");
}

async function getAdminForm (req, res) {
    res.render("adminPage", {
        user: req.user
    });
}

module.exports = {
    getMembershipForm,
    postMembershipForm,
    getAdminForm
}
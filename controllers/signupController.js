const db = require("../db/queries");

async function getForm(req, res) {
    res.render("signup"); 
}

async function postUser(req, res) {
    const user = req.body;
    await db.addUser(user);
    res.redirect("/");
}

module.exports = {
    getForm,
    postUser
}
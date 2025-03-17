const db = require("../db/queries");

async function getPosts(req, res) {
    const testValue = "Value passed";
    res.render("index", {
        test: testValue,
        user: req.user
    }); 
}

module.exports = {
    getPosts
}
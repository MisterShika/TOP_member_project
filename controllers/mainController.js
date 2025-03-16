const db = require("../db/queries");

async function getPosts(req, res) {
    const testValue = "Value passed";
    res.render("index", {
        test: testValue
    }); 
}

module.exports = {
    getPosts
}
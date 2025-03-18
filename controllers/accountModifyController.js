async function getForm (req, res) {
    res.render("secretPage", {
        user: req.user
    }); 
}

module.exports = {
    getForm
}
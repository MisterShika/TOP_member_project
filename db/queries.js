const db = require("../db");
const bcrypt = require("bcryptjs");

async function addUser(user){
    const {email, password, firstName, lastName} = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO users (email, password, fname, lname) values ($1, $2, $3, $4)", 
        [email, hashedPassword, firstName, lastName]
    );
    console.log(`Added Email: ${email}, Password: ${hashedPassword}`);
}

module.exports = {
    addUser
};
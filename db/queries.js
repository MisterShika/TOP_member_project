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

async function getPosts(){
    const {rows} = await db.query(`
        SELECT posts.*, users.fname, users.lname
        FROM posts
        JOIN users ON posts.creator = users.id
    `);
    return rows;
}

async function addPost(user, post){

    const {id} = user;
    const {postTitle, postContent} = post;
    await db.query("INSERT INTO posts (creator, title, content) values ($1, $2, $3)", [id, postTitle, postContent]);
}

module.exports = {
    addUser,
    getPosts,
    addPost,
};
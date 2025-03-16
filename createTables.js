require('dotenv').config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        member BOOLEAN NOT NULL DEFAULT false
    );

    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        creator INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        CONSTRAINT fk_creator
            FOREIGN KEY (creator)
            REFERENCES users (id)
            ON DELETE CASCADE
    );

    CREATE INDEX creator_index ON posts (creator);
`;

async function createTables () {
    console.log("Creating tables...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Tables created.");
};

createTables();
const sqlite3 = require('sqlite3').verbose();


// connect to DB
const db = new sqlite3.Database('./time_card.db', (err) => {
    if (err) {
        console.error('Error connecting to the database', err)
    } else {
        console.log('Connected to SQLite database');
    };
});

// create table
db.run = `CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, first_name, last_name, pin_number)`;

// drop table
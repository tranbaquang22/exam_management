import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'user_here',
    password: 'password_here',
    database: 'db_name_here'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

export default db;
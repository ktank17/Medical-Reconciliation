const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sys',
    multipleStatements: true
});

//check if database is connected
db.connect((err)=> {
 	if (err) throw err;
 	console.log('DB Connected');
 });

module.exports = db;

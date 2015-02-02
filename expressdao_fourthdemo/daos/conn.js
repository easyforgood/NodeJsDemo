
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'test',
    port: 3306
});
/*conn.connect();
conn.query('select * from login', function(err, rows, fields) {
    if (err) throw err;
    console.log('The username is: ', rows[0].username);
});
conn.end();
*/

module.exports =conn;
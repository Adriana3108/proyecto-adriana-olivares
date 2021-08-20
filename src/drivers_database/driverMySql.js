const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root@localhost',
    password: '',
    database: 'gestor de notas'

});
 connection.connect ((err) => {
     if (err) throw err;
     console.log('mysql=========> conexcion');
 });
 module.exports = mysql;

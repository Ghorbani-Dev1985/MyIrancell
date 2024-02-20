const mysql = require('mysql')

const MyIrancellDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MyIrancll'
})

module.exports = MyIrancellDB;
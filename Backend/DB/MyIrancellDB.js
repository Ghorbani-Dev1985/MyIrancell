const mysql = require('mysql')

const MyIrancellDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MyIrancll'
})

MyIrancellDB.connect(error => {
    if(error) {
   console.log(`Error =>  ${error}`)
    }else{
        console.log('Connect to database successfully...')
    }
})

module.exports = MyIrancellDB;
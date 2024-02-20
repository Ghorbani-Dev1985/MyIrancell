const exports = require('express')
const cors = require('cors')
const MyIrancellDB = require('./DB/MyIrancellDB')

const app = exports()
app,use(cors())

app.get('/api/users' , (req , res) => {
    let userToken = req.header.authorization
    let getMainUserQuery = `SELECT * FROM users WHERE token = ${userToken}`
    MyIrancellDB.query(getMainUserQuery , (error , result) => {
        if(error){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})

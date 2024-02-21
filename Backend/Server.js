const express = require('express')
const cors = require('cors')
const MyIrancellDB = require('./DB/MyIrancellDB')
const getUserIDFromUserToken = require('./Utils/Funcs')


const app = express()
app.use(cors())

app.get('/api/users' , (req , res) => {
    let userToken = req.headers.authorization
    let getMainUserQuery = `SELECT * FROM users WHERE token = "${userToken}"`
    MyIrancellDB.query(getMainUserQuery , (error , result) => {
        if(error){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})

app.get('/api/services/:isActive' , (req , res) => {
    let isActive = req.params.isActive
    let getServicesQuery = `SELECT * FROM services WHERE isActive = ${isActive}`
    MyIrancellDB.query(getServicesQuery , (error , result) => {
        if(error){
            res.send(null)
        }else{
            res.send(result)
        } 
    })
})

app.get('/api/recommendPacks' , (req , res) => {
    let userToken = req.headers.authorization
    let userID = null;
    getUserIDFromUserToken(userToken)
    .then((result) => {
        userID = result[0].id
        let getUserRecommendPacksQuery = `SELECT * FROM recommendPackage WHERE userID = ${userID}`
        MyIrancellDB.query(getUserRecommendPacksQuery , (error , result) => {
            if(error){
                res.send(null)
            }else{
                res.send(result)
            } 
        })
    })
})

app.get('/api/userBuy' , (req , res) => {
    let userToken = req.headers.authorization
    let userID = getUserIDFromUserToken(userToken)
    let getUserBuyInfo = `SELECT * FROM sales WHERE userID = ${userID}`
    MyIrancellDB.query(getUserBuyInfo , (error , result) => {
        if(error){
            res.send(null)
        }else{
            res.send(result)
        } 
    })
})

app.listen(3000)
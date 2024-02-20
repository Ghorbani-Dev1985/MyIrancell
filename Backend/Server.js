const MyIrancellDB = require('./DB/MyIrancellDB')

MyIrancellDB.connect(error => {
    if(error) {
   console.log(`Error =>  ${error}`)
    }else{
        console.log('Connect to database successfully...')
    }
})
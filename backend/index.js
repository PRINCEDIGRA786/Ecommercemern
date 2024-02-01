const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;



app.use(cors())

app.use(express.json())

//Available Routes:

app.use('/api/auth', require('./routes/auth'))
app.use('/api/order', require('./routes/order'))

app.use('/',(req,res)=>{
    res.json({"mesaage":"connected to server"});})


app.listen(port, () => {
    console.log(`Bazaarhub app backend listening at port :  http://localhost:${port}`)
})

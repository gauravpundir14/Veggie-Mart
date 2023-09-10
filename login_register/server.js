const  express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/ytregister',{
     useNewUrlParser : true
})

const db = mongoose.connection;

db.on('error',()=>{console.log("error is in Conection");})

db.once('open',()=>{console.log("Connected ");})


//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set('view engine' ,'ejs')

app.use(express.static('public'))



const homeRouter = require('./routers/homeRouter')
app.use('/',homeRouter)

app.listen(5000,()=>{
    console.log("server is runing");
})
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')

const mongoConnect = require('./config')
const authRoute = require('./routes/authRoute')
const blogRoute = require('./routes/blogRoute')


dotenv.config()

const app = express()
const port = 400 || process.env.PORT

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/auth', authRoute)
app.use('/blog', blogRoute)


app.get('/', (req,res)=>{
    res.status(200).json({message: "Api up"})
})

app.listen(port, ()=>{
 mongoConnect()
    console.log(`Server listening at ${port}`)
})
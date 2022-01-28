const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
// const swagger = require('./docs/swagger')
const mongoConnect = require('./config')
// const swaggerUI = require('swagger-ui-express')
const authRoute = require('./routes/authRoute')
const blogRoute = require('./routes/blogRoute')


dotenv.config()

const app = express()
const port = process.env.PORT || 400


// app.use('/swagger', swagger.serve, swagger.setup(swagger))

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
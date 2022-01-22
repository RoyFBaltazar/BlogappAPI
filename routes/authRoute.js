// Add bcrypt!
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../schemas/userSchema')
const userRouter = express.Router()
const verifyToken = require('../middleware/jwt')
const jwt = require('jsonwebtoken')
const { json } = require('express/lib/response')
const req = require('express/lib/request')




userRouter.post('/register', async (req, res)=>{
    let user = req.body
    let password = req.body.password
    let salt = Number(process.env.SALT)
    let hashedPassword = await bcrypt.hash(password, salt)
    user.password = hashedPassword

    User.create(user, (err, newUser)=>{
        if(err){
            res.status(404).json({message: err.message})
        }
        res.status(200).json({user:newUser})
    })
})
userRouter.post('/login', (req,res)=>{
    let username = req.body.username
    let password = req.body.password

    if (!password || !username){
        res.status(400).json({message: "user not found "})
    }
    User.findOne({username: username}, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result === null || result === undefined){
            res.status(404).json({message: "user not found"})
        }
    bcrypt.compare(password, result.password, (error, match)=>{
        if(error){
            res.status(403).json({message: error.message})
        }
        if(match === false){
            res.status(403).json({message: "check username or password"})
        }
        let token = jwt.sign(username, process.env.JWT_SECRET)
        res.setHeader('Authorization', token)
        res.status(200).json({data: result})
    })
    })

})
userRouter.get('/', verifyToken, (req, res)=>{
    User.find((error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        if(result === null || result === undefined || result === []){
            res.status(404).json({message: "NOT FOUND"})
        }
        res.status(200).json({data: result})
    })
})


module.exports = userRouter
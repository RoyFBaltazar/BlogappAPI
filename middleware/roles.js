const Blog = require('../schemas/blogSchema')
const User = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const roles = {
    "Admin": 2232,
    "editor": 1233,
    "User": 1234,
}

function privateAcess(req, res, next){
const blog = Blog.find()
if(blog.private === false){
    res.status(403).json({message: error.message})
}
next()

}
function loginBlog(req, res, next){
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
        // let token = jwt.sign(username, process.env.JWT_SECRET)
        // res.setHeader('Authorization', token)
        res.status(200).json({data: result})
    })
    })
next()
}
module.exports = loginBlog
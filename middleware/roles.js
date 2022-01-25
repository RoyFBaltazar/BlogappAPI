const Blog = require('../schemas/blogSchema')

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
module.exports = privateAcess
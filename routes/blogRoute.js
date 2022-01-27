// - /blogs
// - dynamic username
//     - CREATE*!
//     - READ*!
// - dynamic id
//     - UPDATE*!
//     - DELETE*!
// - base
//     - READ
//         - ONLY display NON private blogs
const bcrypt = require('bcrypt')
const express = require('express')
const Blog = require('../schemas/blogSchema')
const blogRoute = express.Router()
const verifyToken = require('../middleware/jwt')
const jwt = require('jsonwebtoken')
const User = require('../schemas/userSchema')
 const privateAcess = require('../middleware/roles')
 const loginBlog = require('../middleware/roles')

blogRoute.get('/', loginBlog, (req,res)=>{
    let username = req.body
    let password = req.body

    Blog.find({private: false }, (error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        if(result === null || result === undefined || result === []){
            res.status(404).json({message: "NOT FOUND"})
        }
        res.status(200).json({data: result})
    })
})

blogRoute.post('/username/:username', loginBlog, verifyToken, (req, res)=>{
  let username = req.params.username
  let password = req.body
  let newblog = req.body

    if(!username){
        res.status(400).json({message: "user not found "})
}
console.log(username)

User.findOne({username: username}, (error, result)=>{
    if(error){
        res.status(400).json({message: error.message})
    }
    if(result === null || result === undefined ||result === username ){
        res.status(404).json({message: "user not found"})
    }})
Blog.create(newblog, (error, updatedBlog)=>{
    if(error){
        res.status(404).json({message: error.message})
    }
    res.status(201).json({message: updatedBlog})
})
})
blogRoute.get('/username/:username', verifyToken,(req, res)=>{
let username = req.params.username

    Blog.find({username: username}, (error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        if(result === null || result === undefined || result === []){
            res.status(404).json({message: "NOT FOUND"})
        }
        res.status(200).json({data: result})
    })
})

blogRoute.put('/id/:id', verifyToken, (req ,res)=>{
    let id = req.params.id
    let updatedBlog = req.body

    Blog.findByIdAndUpdate(id, updatedBlog, (error, changedBlog)=>{
        if(error){
            res.status(404).json({error: error.message})
        }
        console.log(changedBlog)
        res.status(201).json({Blog: changedBlog})
    })
})
blogRoute.get('/id/:id',(req, res)=>{
    let id = req.params.id
    
        Blog.findById(id, (error, result)=>{
            if(error){
                res.status(404).json({message: error.message})
            }
            if(result === null || result === undefined ){
                res.status(404).json({message: "NOT FOUND"})
            }
            res.status(200).json({data: result})
        })
    })
blogRoute.delete('/id/:id', verifyToken, (req, res)=>{
    let id = req.params.id
    
    Blog.findByIdAndDelete(id, (error, returned)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        res.status(204).json({blog: "this blog has been deleted " + returned})
    })
})



module.exports = blogRoute
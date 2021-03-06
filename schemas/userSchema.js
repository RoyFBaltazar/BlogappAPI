// Generate Access Token
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username:{type: String, required: true, index: {unique: true}},
    password:{type: String, required: true},
     email:{type: String, required: true, index: {unique: true}},
     birthday: {type: Number, required: true},
     age: {type: Number},
})
const userModel = mongoose.model('User', userSchema)

module.exports = userModel
// -Blog Schema
// - created_by: string, required
// - created_at: date, required
// - blog_title: string, required
// - blog_content: string, required
// - blog_content: string, required
// - private: boolean, required
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

 username:{type: String, require: true},
 created_by:{type: String, required: true},
 created_at: {type: String, required: true, default: Date.now},
 blog_title: {type: String, required: true},
 blog_content: {type: String, required: true},
  private: {type: Boolean, default: false}
})

const blogModel = mongoose.model('Blog', blogSchema)

module.exports = blogModel
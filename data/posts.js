const express = require('express');
const data = require('./db.js');
const post = express.Router()

post.post('/', (req, res)=> {
 const postContent = req.body
 data.insert(postContent)
 .then(posted => {
  
  res.status(200).json(posted);
 }).catch(err=> {

  res.status(500).json(err)
 })
})
post.put('/:id/comments', (req, res)=> {
 const comment = req.body
 const id = req.params.id
 data.insertComment(comment)


 .then(posted => {
  
  res.status(200).json(posted);
 }).catch(err=> {

  res.status(500).json(err)

  console.log(err)
 })
})



post.get('/', (req, res)=> {
 data.find()
 .then(posted => {
  
  res.status(200).json(posted);
 }).catch(err=> {

  res.status(500).json(err)
 })
})
post.get('/:id/comments', (req, res)=> {
 const id = req.params.id
  data.findPostComments(id)
 .then(posted => {
  
  res.status(200).json(posted);
 }).catch(err=> {

  res.status(500).json(err)
 })
})




module.exports = post
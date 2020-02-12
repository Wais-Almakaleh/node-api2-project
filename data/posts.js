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


post.get('/:id', (req, res)=>{

const {id} = req.params
data.findById(id)
.then(posted => {

 res.status(200).json(posted)
}).catch(err => {

 res.status(500).json(err)
})

post.get('/:id/comments', (req, res)=> {

const {id} = req.params
data.findCommentById(id)
.then(posted => {

 res.status(200).json(posted)

}).catch(err => {

 res.status(200).json(err)
})
})

post.delete('/:id',(req, res) => {


const {id} = req.params
data.remove(id)
.then(removed => {

 res.status(200).json(removed)
}).catch(err => {

 res.status(500).json(err)
})
} )

post.put('/:id', (req, res)=> {
 
 const {id} = req.params;
 const body = req.body
 data.update(id, body)
 .then(updated => {

  res.status(200).json(updated);
 }).catch(err => {

  res.status(500).json(err)
 })
})

})
module.exports = post
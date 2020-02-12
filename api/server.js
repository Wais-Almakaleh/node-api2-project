const express = require('express');
const blog = require('../data/blogs.js');
const post = require('../data/posts.js')
const server = express()
server.use(express.json());

server.use('/api/blog', blog)
server.use('/api/post', post)

module.exports = server;

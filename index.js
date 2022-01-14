const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')




const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://sahin:laplace822@cluster0-shard-00-00.6ikye.mongodb.net:27017,cluster0-shard-00-01.6ikye.mongodb.net:27017,cluster0-shard-00-02.6ikye.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13m5bq-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
  .then(res => {console.log('Connected to MongoDB')
})
  .catch(error => {
    console.log('Error connecting to MongoDB')
  })

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
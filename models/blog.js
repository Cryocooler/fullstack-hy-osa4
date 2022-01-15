const mongoose = require('mongoose')
//const validator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
  .then(res => {console.log('Connected to MongoDB')
    })
  .catch(error => {
    console.log('Error connecting to MongoDB')
    })


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
    })
      

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        }

})


module.exports = mongoose.model('Blog', blogSchema)

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/text', { useNewUrlParser: true})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log("we are connected")
})
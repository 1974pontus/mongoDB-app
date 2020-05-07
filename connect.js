
//Denna konnektar med mongoose
//(Denna koden kan ligga i app.js men är lite mer lättläst att ha det uppdelat)

//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/text', { useNewUrlParser: true})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log("we are connected")
})



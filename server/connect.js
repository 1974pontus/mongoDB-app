
//Denna connectar med mongoose
//(Denna koden kan ligga i app.js men är lite mer lättläst att ha det uppdelat)

//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quoteapp', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database is connected')
})

db.on('error', err => {
  console.error('connection error:', err)
})



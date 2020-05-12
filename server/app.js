//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen
require('./connect.js')
const quoteRouter = require('./routers/quoteRouter')
const userRouter = require('./routers/userRouter')
const express = require('express')


const app = express()
const PORT = 5500

//all incoming data parses to json
app.use(express.json())

//use routers
app.use('/users', userRouter)
app.use('/quotes', quoteRouter)

// 404 middleware
app.use((req, res) => {
    res.status(404).json('Resourse could not be found')
})

app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})
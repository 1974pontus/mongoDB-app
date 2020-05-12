//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen
require('./connect')
const express = require('express')
const quoteRouter = require('./routers/quoteRouter')
const userRouter = require('./routers/userRouter')



const app = express()
const PORT = process.env.PORT || 3000

//all incoming data parses to json
app.use(express.json())

//use routers
app.use('/users', userRouter)
app.use('/quotes', quoteRouter)



// 404 middleware
app.use((req, res) => {
    console(404).json('Resourse could not be found')
})

app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})
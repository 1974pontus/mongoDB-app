//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen
require('./connect')
const cors = require('cors')
const express = require('express')
const quoteRouter = require('./routers/quoteRouter')
const userRouter = require('./routers/userRouter')
const cors = require('cors')
const cookieSession = require('cookie-session')


const app = express()

const PORT = process.env.PORT || 3000


//all incoming data parses to json
app.use(express.json())

//specar olika proj (frontend http)
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5501'
}))

app.use(cookieSession({
    secret: 'secretKey', 
    maxAge: 1000 * 10, // 10s **********detta bör ändras till 24 timmar*************** exempel expire: date
    sameSite: 'strict', //(Kakan får endast användas från samma domän som den skickades till. Så ingen kan sno kakan och använda den) 
    httpOnly: true, //(Vi får INTE nå kakan med javascript utan endas webbläsaren som kan få tillgång till kakan.
    secure: false, //(Kakan får endast lov att användas om man använder HTTPS om man sätter den till true)
   }))

//use routers
app.use('/api/users', userRouter)
app.use('/api/quotes', quoteRouter)



// 404 middleware
app.use((req, res) => {
   res.status(404).json('Resourse could not be found')
})  

app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})
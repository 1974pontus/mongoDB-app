//Denna router middleware är för  user resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const userModel = require('../models/user')
//const cookieSession = require('cookie-session')
const userRouter = express.Router()


//Create and save a testUser, is connected to testQuote
const testUser = new userModel ({
    name: 'George Costanza',
    password: 'Bosco!'
})

// userRouter.use(cookieSession({
//     secret: 'aVeryS3cr3tK3y',
//     maxAge: 1000 * 30, // 30s
//     sameSite: 'strict', //Kakan får endast användas från samma domän som den skickades till. Så ingen kan sno kakan och använda den
//     httpOnly: true, //Vi får INTE nå kakan med javascript utan endas webbläsaren som kan få tillgång till kakan
//     secure: false, //Kakan får endast lov att användas om man använder HTTPS om man sätter den till true) som är vanligt förekommande och kan användas för att öka säkerheten på kakorna.
// }))

  testUser.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
  })

userRouter.get('/', async ( req, res) => {/* hämta en användare från databasen och när en användare har loggat in på sin sida*/
    try {
        const userModel = await userModel.find({})
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    //console.log(user)
    //console.log('hej' + req.body)
})

// ONE USER
userRouter.get("/:name", async (req, res) => {
    try {
      const userModel = await userModel.findOne({ name: req.params.name });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// userRouter.post('/api/users', (req, res) => {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     users.push({
//         name: req.body.name,
//         password: hashedPassword
//     })
//     res.status(201).json(hashedPassword)
    //console.log('the post user function' + req.body)
   // res.json('user was created')
    /* lägga till en användare till databasen när man skapar en användare/loggat in }) */








    
userRouter.put(function ( req, res ) { /* ?? behöver vi denna, redigera en användare i databasen, ingår inte i uppgiften ?? */})
userRouter.delete(function ( req, res ) { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */})


module.exports = userRouter
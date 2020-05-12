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
/* 
  testUser.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
  }) */

userRouter.get('/', async ( req, res) => {/* hämta en användare från databasen och när en användare har loggat in på sin sida*/
    console.log("********SERENITY NOW!!!!!!")
  try {
        const user = await userModel.find({})
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    //console.log(user)
    //console.log('hej' + req.body)
})

// ONE USER
userRouter.get("/_id", async (req, res) => {
    try {
      const userModel = await userModel.findOne({ name: req.params.name });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


userRouter.post('/', async (req, res) => {
    /* const hashedPassword = bcrypt.hash(req.body.password, 10) */
    try {
    const newUser = new userModel({ name: req.body.name , password: req.body.password }) 
    const savedUser = await newUser.save()
    
  /* res.send("hej") */
  res.status(201).send(savedUser)
  }
  catch (err){
    console.log(err)
  }
})
/* lägga till en användare till databasen när man skapar en användare/loggat in }) */

    
// userRouter.put("/:name", getUser, async( req, res ) =>{ /* ?? behöver vi denna, redigera en användare i databasen, ingår inte i uppgiften ?? */
  
//         console.log(res.user);
      
//         if (req.body.password === "") {
//           req.body.password = res.user.password;
//         }
//         res.user.comparePassword(req.body.password, async function (err, isMatch) {
//           if (err) throw err;
      
//           if (!isMatch) {
//             res.user.password = req.body.password;
//           }
      
//           res.user.name = req.body.name;
//           res.user.admin = req.body.admin;
      
//           try {
//             const updatedUser = await res.user.save();
//             res.json(updatedUser);
//           } catch (err) {
//             res.status(400);
//           }
//       })
// })
userRouter.delete("/:id", async ( req, res, next ) => { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */
    try {
        await res.user.remove();
        res.json(res.user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


module.exports = userRouter
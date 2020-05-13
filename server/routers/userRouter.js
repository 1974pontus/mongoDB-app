//Denna router middleware är för  user resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
//const cookieSession = require('cookie-session')
//const bcrypt = require('bcrypt')
const userRouter = express.Router()


//Create and save a testUser, is connected to testQuote
const testUser = new userModel ({
    name: 'George Costanza',
    password: 'Bosco!'
})
/* 
  testUser.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
  }) */

  // ONE USER
  userRouter.get("/_id", async (req, res) => {
      try {
        const userModel = await userModel.findOne({ name: req.params.id })
        res.json(user)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    });

// GET ALL USERS 
userRouter.get('/', async ( req, res) => {/* hämta en användare från databasen och när en användare har loggat in på sin sida*/
    console.log("********SERENITY NOW!!!!!!")
  try {
        const user = await userModel.find({})
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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


//create a user
userRouter.post('/createUser', async (req, res) => {
  userModel.findOne({ name: req.body.name})
  .then(user => {
    if (user)
    { console.log("1")
      if (bcrypt.compareSync(req.body.password, user.password)){
        console.log("2")
        return res.json('Succesful login')
      } 
    else {
      console.log("3")
      return res.status(401).json('Wrong password')
      }
    }
    else {
      console.log("4")
      return res.status(401).json('Wrong username')
    }
    
  })
  .catch(err => {
    console.log(err)
  })
})




userRouter.post('/login', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  userModel.findOne({ name: req.body.name})
  .then(user => {
    console.log(user)
    if(!user ) {
        const newUser = new userModel({ name: req.body.name , password: hashedPassword })
         
        newUser.save().then(savedUser => {
          res.status(201).send(savedUser)
        } )
        .catch(err => {
          console.log(err)
        })
        console.log(newUser)
        
    } 
    
    else {
      res.status(500).json({ message: "err.message" });
    }
    
  }
  )
  .catch(err => {
    console.log(err)
  })
  /* const hashedPassword = bcrypt.hash(req.body.password, 10) */
  
})


/* lägga till en användare till databasen när man skapar en användare/loggat in }) */


// userRouter.delete("/:id", async ( req, res, next ) => { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */
//     console.log("********SERENITY NOW!!!!!! AGAIN!!!!!!!!!")
//     try {
//         const user = await userModel.deleteOne({ name: req.params.name });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

module.exports = userRouter
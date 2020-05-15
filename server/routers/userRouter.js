//Denna router middleware är för  user resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const cookieSession = require('cookie-session')
const userRouter = express.Router()


//Create and save a testUser, is connected to testQuote
const testUser = new userModel ({
    name: 'George Costanza',
    password: 'Bosco!'
})

//Prepare tamper-proof cookie
//En middleweare för cookies

/* 
  testUser.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
  }) */

  //middlewear secure 
  // ONE USER
  userRouter.get("/_id", async (req, res) => {
    try {
      if(!req.session.username) {
        return res.status(401).json('Oh no 👻This is not your account pleace login again')
    }  else{
      //if(req.session.role === 'admin')
      //const userModel = await userModel.findOne({ name: req.body.id })
      return res.json(user) // med eller utan eller return res.json(user)
    }
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    })

    //check if you are logged in
    userRouter.get("/authenticate", async (req, res) => {
      try {
          if(req.session.user) {
            res.send({user: req.session.user.name})
        }  else{
          //if(req.session.role === 'admin')
          //const userModel = await userModel.findOne({ name: req.body.id })
          res.send({user: false})
        }
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    })
    

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


//LOGIN A USER
userRouter.post('/login', async (req, res) => {
  console.log('LoGGED IN USER*************', req.session.user)
  userModel.findOne({ name: req.body.name})
  .then(user => {
      if (user) { 
      console.log("1")
      // Check if user already is logged in
      if (bcrypt.compareSync(req.body.password, user.password)){
        console.log("2")
        req.session.user = user
       
        // Check if user already is logged in
        return res.json('🥳Succesful login 🚀')
        // create session
        
      } else {
        console.log("3")
        return res.status(401).json('🙀pleace check your password')
      }
    }
      else {
        console.log("4")
        return res.status(401).json('😱pleace check your username')
      }
    })
    .catch(err => {
      console.log(err)
    })
})


//REGISTER A USER
userRouter.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password || req.body.name, 10)
  userModel.findOne({ name: req.body.name})
  .then(user => {

    //TODOD Create session
    console.log(user)
    if(!user ) {
        const newUser = new userModel({ 
          name: req.body.name, 
          password: hashedPassword 
        })
  
        newUser.save().then(savedUser => {
          res.status(201).send(savedUser)
        })
        .catch(err => {
          console.log(err) 
        })
        console.log(newUser)
        
    } else {
      res.status(500).json({ message: "😎Sorry, this awsome username is already taken" });
      } //"🤔Are you chore you have the right username or password"
    }
  )
  .catch(err => {
    console.log(err)
  })
})


/* lägga till en användare till databasen när man skapar en användare/loggat in }) */

//USER LOGGOUT
userRouter.delete("/logout",( req, res, next ) => { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */
    console.log("********SERENITY NOW!!!!!! AGAIN!!!!!!!!!")
    req.session = null
    res.send('👋Thanx for the visit your now LOGGED OUT out 🏝')
})

module.exports = userRouter

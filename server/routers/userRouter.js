//Denna router middleware är för  user resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const userModel = require('../models/user')
const userRouter = express.Router()

/* const elaine = new User({ name: 'Elaine', password: 'password123' });

elaine.save(function (err, elaine) {
    if (err) return console.error(err);
  });  */

    // async function saveUser (user) {
    //      const user = new userModel(user)
    //      return user.save()
    //  }
 
    // saveUser({
    //      name: 'Elaine Benes',
    //      password: 'hello'
    //  })

userRouter.get('/', async function ( req, res) {/* hämta en användare från databasen och när en användare har loggat in på sin sida*/
    const user = await userModel.find({})
    console.log(user)
    res.json("list of users")
})


userRouter.post('/api/users', (req, res) => {
    console.log('the post user function' + req.body)
    res.json('user was created')
    /* lägga till en användare till databasen när man skapar en användare/loggat in */})








    
userRouter.put(function ( req, res ) { /* ?? behöver vi denna, redigera en användare i databasen, ingår inte i uppgiften ?? */})
userRouter.delete(function ( req, res ) { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */})


module.exports = userRouter
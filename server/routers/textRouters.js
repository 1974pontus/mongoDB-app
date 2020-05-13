
const express = require('express')
const bcrypt = require('bcrypt')
const cookieSession = require('cookie-session')
 
// Create server application
const app = express()
 
// "database"
const users = [{
 name: "david",
 password: "123456"
}]
 
// Parse request body as json
app.use(express.json())
 
// Prepare tamper-proof cookie
app.use(cookieSession({
 secret: 'aVeryS3cr3tK3y',
 maxAge: 1000 * 10, // 10s
 sameSite: 'strict',
 httpOnly: true,
 secure: false,
}))
 
/**
 * Sends back all the users. Just for test purpose.
 * In a production application we probably dont
 * want to expose usernames and passwords. 
 */
app.get('/users', secureRouteWithRole('admin'), (req, res) => {
 res.json(users)
})
 
// Register a new user
app.post('/users', async (req, res) => {
 const hashedPassword = await bcrypt.hash(req.body.password, 10)
 //this is how he haved saved the user
 users.push({
 name: req.body.name,
 password: hashedPassword
 })
 res.status(201).json(hashedPassword)
})
 
// Attemp to login a user
app.post('/login', async (req, res) => {
 // Check if username & password is correct

 const user = userModel.findOne(user => user.name === req.body.name)
 if (!user || !await bcrypt.compare(req.body.password, user.password)) {
 return res.status(401).json('Wrong username or password')
 }
 
 // Check if user already is logged in
 if (req.session.username) {
 return res.json('You are already logged in')
 }
 
 // Create session
/*  req.session.username = user.name
 req.session.role = 'admin'
  */
 // Send a response
 res.send('Succesful login')
})
 
// Logout
app.delete('/logout', (req, res) => {
 // Check if user already is logged out
 if (!req.session.username) {
 return res.status(400).json('You are already logged out')
 }
 
 // Remove the session and send a response
 req.session = null
 res.send('You are now logged out!')
})
 
// Start server
app.listen(3000, () => console.log('Server is running...'))



 
// Helper middleware to secure an endpoint
function secureRoute(req, res, next) {
 if (!req.session.username) {
 return res.status(401).json('You are not authorized - login!')
 }
 next()
}
 
// Or even a secure route middleware where a role can be specified!
function secureRouteWithRole(role) {
 return function (req, res, next) {
 if (!req.session.username || req.session.role !== role) {
 return res.status(401).json('You are not authorized - login!')
 }
 next()
 }
}


































//I denna ligger all logik och all CRUD

//Man ska se det som en trappa ned och upp som man skickar info. 
//Börjar från text.js ned till app.js sen connect.js (som pratar med mongoose->databasen) 
//och sen upp igen
const express = require('express')
//-----This is where the reference to the our modules will be 
//const modelQ = require('../models/qoute.js')
//const modelU = require('../models/users')


const router = express.Router()

//Post ---> Creat
router.post('/',async (req, res, next) => {
     //-------Gets data from Model-------
    //const todo = req.body
    //const todoDoc = await new TodoModel(todo)
    
    //-------this saves it to the database-------
    // const savedDocument = await todoDoc.save()
    // res.send(JSON.stringify(savedDocument))
    console.log(req.body)
})

//Get ---> Read
router.get('/', (req, res, next) => {
    // const todoId = req.query.id 

    // TodoService.get(todoId)
    //     .then((todo) => res.send(todo))
    //     .catch(next)
        console.log(req.query.id )
})


//Put ----> Update
router.put('/', (req, res, next) => {
    // const todoId = req.body

    // TodoService.update(todo)
    //     .then(() => res.send())
    //     .catch(next)
        console.log(req.body )
})

//Delete
router.delete('/', (req, res, next) => {
    //----find the id that mongoose generat and send 
    //----it as a request to the body
    //const {id } = req.body
    console.log(req.body )
})

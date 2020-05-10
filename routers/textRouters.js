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

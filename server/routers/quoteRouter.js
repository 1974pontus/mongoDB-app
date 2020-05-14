//Denna router middleware är för  quote resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const quoteModel = require('../models/quote')
const quoteRouter = express.Router()

//Create and save a testQuote, is connected to testUser
const testQuote = new quoteModel ({
    content: 'If she can not find me, she can not break up with me.',
    user: {_id: "5eb970f3f870c3c976ef66d9"}
  })
  /* 
  testQuote.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
   
  }) */
 
//Home page 
quoteRouter.get( '/', async  (req, res) =>  { /* för att hämta alla quotes i databasen till första sidan */
    try {
        const allQuotes = await quoteModel.find({})
        console.log(allQuotes + req.body + "hej")
    res.json({ allQuotes })
    }
    catch (error) {
        console.log(error)
    }
})


 
//User page, /* för att hämta alla quotes som tillhör en user när den är inloggad*/
quoteRouter.get( '/user', async function (req, res) { 
    const thisUser = await thisUser.findOne({ /* the number of the user that is logged in */ })
    const usersQuotes = await Quote.find({ _id: thisUser._id })
    console.log(usersQuotes)
    
})

/* secure: för att lägga till en quote i databasen när user är inloggad*/
 quoteRouter.post('/hej', async function ( req, res) { 
    const thisUser = await thisUser.findOne({/* the user that is logged in */})
    
    //Save quote
    const addQuote = new quoteModel({
        content:'',
        user: thisUser._id
    })
    const savedQuotes = addQuote.save()

    //Link user to quote
    thisUser.addQuote.push(savedQuotes._id)
    await thisUser.save()
})


//Post a new quote
//Have too match user id with user id
quoteRouter.post('/', async function ( req, res) {
    quoteModel.findOne({ content: req.body.content})
    .then(quote => {
      console.log(quote)
      if(!quote ) {
          const newQuote = new newQuote({ content: req.body.content , user: req.body.user })
           
          newQuote.save().then(savedQuote => {
            res.status(201).send(savedQuote)
          } )
          .catch(err => {
            console.log(err)
          })
          console.log(newQuote)  
      } 
      else {
        res.status(500).json({ message: "This quote already exist" });
      }
    }
    )
    .catch(err => {
      console.log(err)
    })
  })



/* secure: för att redigera en quote när user är inloggad */
quoteRouter.put( '/:id', async function ( req, res) { 
    const thisUser = await thisUser.findOne({/* the user that is logged in */})
    
    const thisQuote = await Quote.findOne({ /* get the quote based on nr-key in array */})
    console.log(thisQuote)
    thisQuote.content = {/* vad klient skriver in */}

    const savedQuote = await thisQuote.save()
    console.log(savedQuote)
})

quoteRouter.delete( '/:id',async function ( req, res) { 
    const thisQuote = await Quote.findOne({/* get the quote based on nr-key in array */ })
    const deletedQuote = await thisQuote.remove()/* secure: för att ta bort en quote när user är inloggad*/})
    

module.exports = quoteRouter 



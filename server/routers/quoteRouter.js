//Denna router middleware är för  quote resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const QuoteModel = require('../models/quote')
const quoteRouter = express.Router()
const cookieSession = require('cookie-session')
const {requiresLogin} = require('../auth')

//Create and save a testQuote, is connected to testUser
const testQuote = new QuoteModel ({
    content: 'If she can not find me, she can not break up with me.',
    user: {_id: "5eb970f3f870c3c976ef66d9"}
  })

//******** GET ALL QUOTES */✅
//User page, /* för att hämta alla quotes som tillhör en user när den är inloggad*/
quoteRouter.get( '/', async function (req, res) { 
  //checks if there is a logged in user
  try {
      const allQuotes = await QuoteModel.find({})
      res.json( allQuotes )
    } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//******** GET ONE USERS QUOTES */✅
quoteRouter.get( '/loggedInUser', requiresLogin, async function (req, res) { 
  //checks if there is a logged in user
  try {
      const allQuotes = await QuoteModel.find({ user: req.session.user._id })
      res.json( allQuotes )
    } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//POST NEW QUOTE ✅
 quoteRouter.post('/', requiresLogin, async function ( req, res) { 
     try {
      const newQuote = new QuoteModel({
      ...req.body, //lägger till content från quotes behöver inte regleras framöver
       user: req.session.user //requiresLogin checks that user exist Middlewear
    })     
      const savedQuotes = await newQuote.save()
      res.status(201).send(savedQuotes)
    } catch (err){
    res.status(500).send
    console.log(err)
  }
})

//*********PUT************* */
//PUT NEW QUOTE AND CONNECT IT TO THE LOGGED IN USER
quoteRouter.put('/:id', requiresLogin, async function ( req, res) { 
  try {
    let quote = await QuoteModel.findOne({ _id: req.params.id })
    if (!quote) {
      return res.status(404).json('Quote does not exist')
    }
    if (quote.user == req.session.user._id) {
      quote = new QuoteModel(Object.assign(quote, req.body))
      await quote.save()
      return res.json('Quote was updated successfully')
    }

    res.status(403).json('Cannot update someone elses quote')
    
  } catch (error) {
    console.error(error)
    res.status(500).json(error.message)
  }
})


//DELETE QUOTE AND CONNECT IT TO THE LOGGED IN USER
quoteRouter.delete('/:id', requiresLogin, async function ( req, res) { 
  try {
    let quote = await QuoteModel.findOne({ _id: req.params.id })
    if (!quote) {
      return res.status(404).json('Quote does not exist')
    }
    if (quote.user == req.session.user._id) {
      await quote.remove()
      return res.json('Quote was deleted successfully')
    }

    res.status(403).json('Cannot update someone elses quote')
    
  } catch (error) {
    console.error(error)
    res.status(500).json(error.message)
  }

})
    

module.exports = quoteRouter 



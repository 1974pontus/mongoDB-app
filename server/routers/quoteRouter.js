//Denna router middleware är för  quote resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const quoteModel = require('../models/quote')
const quoteRouter = express.Router()

//Home page 
quoteRouter.get( '/', async function (req, res) { /* för att hämta alla quotes i databasen till första sidan */
    const quotes = await quoteModel.find({})
    console.log(quotes + req.body + "hej")
    res.json("list of quotes")
})
 
//User page
quoteRouter.get( '/user', function (req, res) { 
    /* för att hämta alla quotes som tillhör en user när den är inloggad*/})

quoteRouter.post('/', function ( req, res) { 
    /* secure: för att lägga till en quote i databasen när user är inloggad*/})

quoteRouter.put( '/:id', function ( req, res) { 
    
    /* secure: för att redigera en quote när user är inloggad*/})

quoteRouter.delete( '/:id',function ( req, res) { 
   
    /* secure: för att ta bort en quote när user är inloggad*/})


module.exports = quoteRouter 



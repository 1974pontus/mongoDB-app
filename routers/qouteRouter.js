//Denna router middleware är för  qoute resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)
const express = require('express')
const qouteModel = require('../models/qoute')
const qouteRouter = express.Router()

//Home page 
qouteRouter.get( '/', async function (req, res) { /* för att hämta alla qoutes i databasen till första sidan */
    const qoutes = await qouteModel.find({})
    console.log(qoutes)
    res.json("list of qoutes")
})

//User page
qouteRouter.get( '/user', function (req, res) { 
    /* för att hämta alla qoutes som tillhör en user när den är inloggad*/})

qouteRouter.post('/', function ( req, res) { 
    /* secure: för att lägga till en qoute i databasen när user är inloggad*/})

qouteRouter.put( '/:id', function ( req, res) { 
    
    /* secure: för att redigera en qoute när user är inloggad*/})

qouteRouter.delete( '/:id',function ( req, res) { 
   
    /* secure: för att ta bort en qoute när user är inloggad*/})


module.exports = qouteRouter 



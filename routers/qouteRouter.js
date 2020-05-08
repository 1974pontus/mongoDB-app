//Denna router middleware är för  qoute resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)

const express = require('express')
const app = express()

const qouteRouter = express.Router()

//Home page 
qouteRouter.get( '/', function (req, res) { /* för att hämta alla qoutes i databasen till första sidan */})

//User page -app.all?
qouteRouter.get( '/users/:userId', function (req, res) { /* för att hämta alla qoutes som tillhör en user när den är inloggad*/})
qouteRouter.post('/users/:userId', function ( req, res) { /* för att lägga till en qoute i databasen när user är inloggad*/})
qouteRouter.put( '/users/:userId/qoutes/:qouteId', function ( req, res) { /* för att redigera en qoute när user är inloggad*/})
qouteRouter.delete( '/users/:userId/qoutes/:qouteId',function ( req, res) { /* för att ta bort en qoute när user är inloggad*/})


//module.exports = qouteRouter 
// app.use(qouteRouter)
app.use( '/', qouteRouter)


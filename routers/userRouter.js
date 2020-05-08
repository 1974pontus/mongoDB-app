//Denna router middleware är för  user resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)

const express = require('express')
const userModel = require('../models/user')
const app = express()

const userRouter = express.Router()
userRouter.get( function ( req, res) {/* hämta en användare från databasen och när en användare har loggat in på sin sida*/})
userRouter.post(function ( req, res) {/* lägga till en användare till databasen när man skapar en användare/loggat in */})
userRouter.put(function ( req, res ) { /* ?? behöver vi denna, redigera en användare i databasen, ingår inte i uppgiften ?? */})
userRouter.delete(function ( req, res ) { /* ?? behöver vi denna, ta bort en användare i databasen, ingår inte i uppgiften ?? */})


module.exports = userRouter
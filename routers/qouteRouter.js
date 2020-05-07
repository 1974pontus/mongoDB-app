//Denna router middleware är för  qoute resursen/modellen och innehåller alla endpoints som den behöver
//Koppling mellan app-resurs-dess endpoints(CRUD)

const express = require('express')
const app = express()

const qouteRouter = express.Router()


qouteRouter.get(function (req, res) { /* 2 get endpoints? 1. hämta alla qoutes till första sidan(URLen) 2. för att visa alla qoutes från databasen som tillhör en specefik user*/})
qouteRouter.post(function ( req, res) { /* för att lägga till en qoute i databasen, detta är för URLen som tillhör en specefik user och qoute? */})
qouteRouter.put(function ( req, res) { /* för att redigera en qoute från databasen, detta är för URLen som tillhör en specefik user och qoute? */})
qouteRouter.delete(function ( req, res) { /* för att ta bort en qoute från databasen, detta är för URLen som tillhör en specefik user och qoute? */})


// 2 endpoints på get: första sidan och när en user är inloggad. --get och rätt url
// 1 endpoint på post, put, delete: sidan när en user är inloggad. --app.all?
app.use '/', qouteRouter

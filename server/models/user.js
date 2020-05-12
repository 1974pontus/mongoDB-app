//Modell kommunicerar med databasen 
//Facit och alla verktyg för kommunikationen till vårt User objekt i databasen

const mongoose = require ('mongoose')
const Schema = mongoose.Schema


//Name, password och quote = nycklar som representerar fälten i databasen
const userSchema = new Schema({
//true för att man ska få ett error om man inte har anget ett unikt namn eller inte anget ett lösenord
    name: {
        type: String, 
        required: true
        
    },
    password: {
        type: String, 
        required: true
    }
})


// exporterar modellen 'User' och schemat userSchema
module.exports = mongoose.model('User', userSchema)


//TODO! 
//Unique -läsa på, hur fungerar det. 
//Ska vi installera och använda mongoose-unique-validator eller något annat istället? 
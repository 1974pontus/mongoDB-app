//Modell kommunicerar med databasen 
//Facit och alla verktyg för kommunikationen till vårt User objekt i databasen

var mongoose = require ('mongoose')
var Schema = mongoose.Schema


//Name, password och Qoutes = nycklar som representerar fälten i databasen
let userSchema = new Schema({
//true för att man ska få ett error om man inte har anget ett unikt namn eller inte anget ett lösenord
    name: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    //Qoutes är en array för att en användare ska kunna posta flera qoute
    //Kopplar User-modellen till sina Qoutes id och Qoute-modellen
    qoutes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Qoute'
    }]
})

// exporterar modellen 'User' och schemat userSchema
module.exports = mongoose.model('User', userSchema)


//TODO! 
//Unique -läsa på, hur fungerar det. 
//Ska vi installera och använda mongoose-unique-validator eller något annat istället? 
//Modell kommunicerar med databasen 
//Facit och alla verktyg för kommunikationen till vårt Qoute objekt i databasen

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Content och user = nycklar som representerar fälten i databasen 
const qouteSchema = new Schema({
    //true för att man ska få ett error om man postar tomt content
    content: {
        type: String, 
        required: true
    },
    //Kopplar Qoute-modellen till sin Users id och modell (collections)
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    }
})

// exporterar kollektionen 'Qoute' och schemat qouteSchema
module.exports = mongoose.model('qoute', qouteSchema)
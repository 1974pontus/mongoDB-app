//Modell kommunicerar med databasen 
//Facit och alla verktyg för kommunikationen till vårt quote objekt i databasen

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Content och user = nycklar som representerar fälten i databasen 
const quoteSchema = new Schema({
    //true för att man ska få ett error om man postar tomt content
    content: {
        type: String, 
        required: true
    },
    //Kopplar quote-modellen till sin Users id och modell (collections)
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    }
})

// exporterar kollektionen 'quote' och schemat quoteSchema
module.exports = mongoose.model('quote', quoteSchema)
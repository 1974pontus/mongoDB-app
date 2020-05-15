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
//const quote = Quote.find({}).populate('user')

// Post.find({}).populate({
//     path: 'user',
//     model: 'User',
//     populate: {
//       path: 'Quote',
//       model: 'quote'
//     }
//   }).exec(callback);



// exporterar kollektionen 'quote' och schemat quoteSchema
module.exports = mongoose.model('Quote', quoteSchema)
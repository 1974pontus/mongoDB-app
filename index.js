//loading the user model
const User = require('./models/users')

const claudia = new User ({
    name: 'tres comas',
    password: 'hej'
})

claudia.save(function(error,document) {
    if (error) console.error(error)
    console.log(document)
})
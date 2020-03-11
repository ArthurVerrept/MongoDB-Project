var mongoose = require('mongoose');

// taking the schema element of mongoose and assigning it to our variable ContactSchema
var ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String
    },
    number:{
        type: String
    },
    date:{
        type: Date,
        // since it is not getting a value from the form, set default to now
        default: Date.now
    }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
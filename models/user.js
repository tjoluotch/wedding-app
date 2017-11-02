var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
   rsvpRes: { type: String, required: true }
   // rsvpConfirmation: {type: true, required: true}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);


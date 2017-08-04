const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const termSchema = new Schema({
    word: {type: String, unique: true},
    lang: {type: String, unique: true, uppercase: true},
    trans: String,
    comment: String,
});

// Create the model class
const termClass = mongoose.model('term', termSchema);

module.exports = termClass;
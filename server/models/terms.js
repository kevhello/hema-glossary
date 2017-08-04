const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const termSchema = new Schema({
    word: {type: String, unique: true, required: true},
    lang: {type: String, uppercase: true, required: true},
    trans: String,
    comment: String,
});

// Create the model class
const termClass = mongoose.model('term', termSchema);

module.exports = termClass;
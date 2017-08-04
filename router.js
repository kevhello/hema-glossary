const glossary = require('./src/glossary');
const TermAccess = require("./server/controllers/terms");

module.exports = function(app) {

    app.get('/terms', TermAccess.retrieveTerms);

    app.post('/terms', TermAccess.createTerm);

};
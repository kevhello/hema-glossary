const TermAccess = require("./server/controllers/terms");

module.exports = function(app) {

    app.get('/terms', TermAccess.retrieveTerms);

    app.post('/terms', TermAccess.createTerm);

};
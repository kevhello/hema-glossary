module.exports = function ({word, lang, comment, trans}) {

    if(lang !== 'ITALIAN' && lang !== 'GERMAN'){
        throw new Error('Invalid language sent');
    }

    if(word === ''){
        throw new Error('Must specify the word');
    }

};
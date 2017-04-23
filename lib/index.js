'use strict';

const capitalize = require('underscore.string/capitalize');
const decapitalize = require('underscore.string/decapitalize');
const words = require('underscore.string/words');

module.exports = function (string) {
    const lowercasedWords = [].concat(
        require('./articles'),
        require('./coordinating-conjunctions'),
        require('./simple-prepositions')
    );

    return words(string).map((word, index) => {
        if (index === 0) {
            return capitalize(word);
        }

        if (lowercasedWords.includes(word)) {
            return decapitalize(word);
        }

        return capitalize(word);
    }).join(' ');
};

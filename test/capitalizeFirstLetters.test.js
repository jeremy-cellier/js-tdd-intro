// capitalizeFirst.js
const capitalizeFirst = require('../capitalizeFirstLetters');
const assert = require('assert');
// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
describe('capitalizeFirst', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirst, 'function');
        // Check that capitalizeFirst accepts one argument
        assert.strictEqual(capitalizeFirst.length, 1);
    });

    it('transforms hello my friend correctly', () => {
        // Check that capitalizeFirst transforms javaScript correctly
        assert.strictEqual(capitalizeFirst('hello my friend'), 'hello My Friend');
    });

    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirst('f'), 'f');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirst(''), '');
    });
})
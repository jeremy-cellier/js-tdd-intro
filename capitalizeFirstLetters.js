// capitalizeFirst.js
const assert = require('assert');

const capitalizeFirst = (arg) => {
    let stringout = '';
    for (let i=0; i < arg.length; i++) {
        if (arg[i] === ' ') {
            stringout = stringout + arg[i] + arg[i + 1].toUpperCase();
            i++;
        }else {
            stringout = stringout + arg[i];
        }
    };
    return stringout;
}

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('hello my friend'), 'hello My Friend');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('f'), 'f');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
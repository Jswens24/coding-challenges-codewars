"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
var reverseWords = function (str) {
    return str.split(' ').reverse().join(' ');
};
exports.reverseWords = reverseWords;
console.log((0, exports.reverseWords)('Hello world!'));
console.log((0, exports.reverseWords)("yoda doesn't speak like this"));

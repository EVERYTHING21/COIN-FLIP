"use strict";
var MAX_THERESHOLD = 1000000;
function flip() {
    return Math.random() >= 0.5;
}
function randomNumber(n) {
    if (n <= 0) {
        throw 'Argument must be greater than 0';
    }
    if (n >= MAX_THERESHOLD) {
        throw 'Argument must be less than 1,000,000';
    }
    var inputAsBinaryArray = n.toString(2).split('');
    var flippedBinaryArray = inputAsBinaryArray.map(function (num) {
        if (flip()) {
            return num === '1' ? '0' : '1';
        }
        return num;
    });
    var flippedBinaryString = flippedBinaryArray.join('');
    var flippedNumber = parseInt(flippedBinaryString, 2);
    while (flippedNumber >= n) {
        flippedNumber >>= 1;
    }
    console.log("For input " + n + " the random generated number is " + flippedNumber + "\n");
    return flippedNumber;
}
module.exports = randomNumber;
console.log('Running Examples ...\n');
randomNumber(500);
randomNumber(1);
randomNumber(500);
randomNumber(999999);
randomNumber(999998);
randomNumber(899999);
randomNumber(1000001);
//# sourceMappingURL=index.js.map
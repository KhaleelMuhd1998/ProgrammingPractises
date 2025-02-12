'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    // Declare variables.
    let numberPositives = 0;
    let numberNeutrals = 0;
    let numberNegatives = 0;

    // Check the values in array.
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            numberPositives++;
        } else if (arr[index] < 0) {
            numberNegatives++;
        } else {
            numberNeutrals++;
        }
    }

    // Display results.
    console.log((numberPositives / arr.length).toFixed(6));
    console.log((numberNegatives / arr.length).toFixed(6));
    console.log((numberNeutrals / arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

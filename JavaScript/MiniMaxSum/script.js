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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    // Declare variables.
    let n = 0;
    let resultArr = [];
    let sum = 0;
    let numberMin = null;
    let numberMax = 0;

    // Calculate the values.
    for (let n1 = 0; n1 < arr.length; n1++) {
        sum = 0;
        for (let n2 = 0; n2 < arr.length; n2++) {
            if (n1 != n2) {
                sum = sum + arr[n2];
            }
        }
        resultArr.push(sum);
    }
    sum = 0;
    
    // Check for maximum and minimum number.
    for (let index = 0; index < arr.length; index++) {
        if (resultArr[index] > numberMax) {
            numberMax = resultArr[index];
        }
    }
    numberMin = numberMax;
    for (let index = 0; index < arr.length; index++) {
        if (resultArr[index] < numberMin) {
            numberMin = resultArr[index];
        }
    }

    // Display the result.
    console.log(numberMin, numberMax);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

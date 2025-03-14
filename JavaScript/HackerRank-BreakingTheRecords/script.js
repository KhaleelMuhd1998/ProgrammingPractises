'use strict';

const fs = require('fs');

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    // Declaring the variables.
    let minCount = 0, maxCount = 0;
    let minScore = 0, maxScore = 0;

    // Comparing the scores.
    for (let index = 0; index < scores.length; index++) {
        if (index == 0) {
            minScore = maxScore = scores[index];
        } else {
            if (scores[index] < minScore) {
                minScore = scores[index];
                minCount++;
            }
            if (scores[index] > maxScore) {
                maxScore = scores[index];
                maxCount++;
            }
        }
    }
    
    // Returning the result.
    return ([maxCount, minCount]);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    // Splitting the string.
    let hh, mm, ss, t = null;
    hh = parseInt((s[0] + s[1]));
    mm = (s[3] + s[4]);
    ss = (s[6] + s[7]);
    t = (s[8] + s[9]);
    
    // Analysing hour's numeric.
    if (hh != 12) {
        if (t == "PM") {
            hh = hh + 12;
        }
    } else if (hh == 12) {
        if (t == "AM") {
            hh = "00";
        }
    }
    if (hh != "00" && hh < 10) {
        hh = ("0" + hh).toString();
    } else {
        hh = hh.toString();
    }
    
    // Returning the result.
    return ((hh + ":" + mm + ":" + ss).toString());
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
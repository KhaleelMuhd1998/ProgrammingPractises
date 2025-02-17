function processData(input) {
    //Enter your code here
    // Reading multiple lines of input.
    let lines = input.split('\n');
    lines.forEach((line, index) => {
        // Splitting the strings.
        let strings = line.split(";");
        let toSeparate = strings[0] === "S" ? true : false;
        let stringsToProcess = strings[2];
        let regex = /[^a-zA-Z0-9]+/g;
        stringsToProcess = stringsToProcess.split(/(?=[^a-z])/);

        // Cleaning the strings.
        stringsToProcess = stringsToProcess.map((element, index) => {
            return element.toLowerCase();
        });
        for (let index = 0; index < stringsToProcess.length; index++) {
            if (stringsToProcess[index].charAt(0) === ' ') {
                stringsToProcess[index] = stringsToProcess[index].slice(1);
            }
            if (stringsToProcess[index] !== "" && regex.test(stringsToProcess[index])) {
                stringsToProcess.splice(index, 1);
                index = 0;
            }
        }

        // Generating requested strings.
        let result = null;
        switch (strings[1]) {
            case "M": {
                if (toSeparate == true) {
                    for (let index = 0; index < stringsToProcess.length; index++) {
                        if (index !== (stringsToProcess.length - 1)) {
                            stringsToProcess[index] = stringsToProcess[index] + " ";
                        }
                    }
                    result = stringsToProcess.join("");
                } else {
                    for (let index = 1; index < stringsToProcess.length; index++) {
                        if (index !== 0) {
                            stringsToProcess[index] = stringsToProcess[index].charAt(0).toUpperCase() + stringsToProcess[index].slice(1);
                        }
                    }
                    result = stringsToProcess.join("") + "()";
                }
                break;
            }
            case "C": {
                if (toSeparate == true) {
                    for (let index = 0; index < stringsToProcess.length; index++) {
                        if (index !== (stringsToProcess.length - 1)) {
                            stringsToProcess[index] = stringsToProcess[index] + " ";
                        }
                    }
                    result = stringsToProcess.join("");
                } else {
                    for (let index = 0; index < stringsToProcess.length; index++) {
                        stringsToProcess[index] = stringsToProcess[index].charAt(0).toUpperCase() + stringsToProcess[index].slice(1);
                    }
                    result = stringsToProcess.join("");
                }
                break;
            }
            case "V": {
                if (toSeparate == true) {
                    for (let index = 0; index < stringsToProcess.length; index++) {
                        if (index !== (stringsToProcess.length - 1)) {
                            stringsToProcess[index] = stringsToProcess[index] + " ";
                        }
                    }
                    result = stringsToProcess.join("");
                } else {
                    for (let index = 0; index < stringsToProcess.length; index++) {
                        if (index !== 0) {
                            stringsToProcess[index] = stringsToProcess[index].charAt(0).toUpperCase() + stringsToProcess[index].slice(1);
                        }
                    }
                    result = stringsToProcess.join("");
                }
                break;
            }
        }

        // Displaying the result.
        console.log(result);
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
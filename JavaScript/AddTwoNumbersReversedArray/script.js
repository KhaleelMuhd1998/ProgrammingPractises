var addTwoNumbers = function(l1, l2) {
    // Calculate first array.
    let n1 = "";
    for (let n = (l1.length - 1); n >= 0; n--) {
        n1 = n1 + l1[n].toString();
    }
    // Calculate second array.
    n1 = parseInt(n1, 10);
    let n2 = "";
    for (let n = (l2.length - 1); n >= 0; n--) {
        n2 = n2 + l2[n].toString();
    }
    n2 = parseInt(n2, 10);
    // Add values.
    let result = (n1 + n2).toString();
    result = result.split("");
    result = result.reverse();
    result = result.map(Number);
    return result;
};

console.log(addTwoNumbers([1,2,3], [1,1,1]));
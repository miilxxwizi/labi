function compare(x) {
    return function (y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    };
}

let compareWithFive = compare(5);

console.log(compareWithFive(8));
console.log(compareWithFive(3));
console.log(compareWithFive(5));

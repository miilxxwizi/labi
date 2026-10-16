function avg(a, b, c) {
    let sum = 0;
    let count = 0;

    if (a !== undefined) {
        sum += a;
        count++;
    }

    if (b !== undefined) {
        sum += b;
        count++;
    }

    if (c !== undefined) {
        sum += c;
        count++;
    }

    if (count == 0) {
        return 0;
    }

    return sum / count;
}

console.log(avg(3, 6, 9));
console.log(avg(4, 8));
console.log(avg(5));

function sum(n) {
    let isOdd = arr[n] % 2 !== 0;

    if (n == 0) {
        return (isOdd) ? arr[0] : 0
    }

    return (isOdd) ? arr[n] + sum(n - 1) : 0 + sum(n - 1)
}

let arr = [5, 3, 2, 10, 1]
let n = arr.length - 1

console.log(sum(n));

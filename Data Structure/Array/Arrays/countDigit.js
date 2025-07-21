let n = 321

function countDigit(n) {
    let counter = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        counter++
    }
    return counter
}

console.log(countDigit(n));

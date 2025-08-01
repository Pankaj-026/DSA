
var isPowerOfTwo = function (n) {
    let isOdd = n % 2 !== 0
    if (isOdd && n != 1) {
        return false
    }

    if (n == 1) return true 
    return isPowerOfTwo(n / 2)

};

console.log(isPowerOfTwo(16));

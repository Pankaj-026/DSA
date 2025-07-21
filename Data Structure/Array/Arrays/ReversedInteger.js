var reverse = function (x) {
    let reversedNumber = 0;
    let xCopy = x
    x = Math.abs(x)

    while (x > 0) {
        let lastDigit = x % 10;
        x = Math.floor(x / 10);
        reversedNumber = (10 * reversedNumber) + lastDigit;
    }

    if (reversedNumber > 2 ** 31 - 1) return 0;

    return (xCopy < 0) ? -reversedNumber : reversedNumber;
};
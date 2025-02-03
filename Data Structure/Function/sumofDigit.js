// +(function sumOfDigit(num) {
//   let sum = 0;

//   while (num > 0) {
//     let lastDigit = num % 10;
//     num = Math.floor(num / 10);
//     sum += lastDigit;
//   }

//   return console.log(sum);
// })(108);

function primeNums(num) {
  if (num == 1 || num == 0) {
    // console.log(`${num} is neither a prime nor a composite number`);
    return false;
  }
  if (num <= 3) {
    // console.log(`${num} is a prime number`);
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    // console.log(`${num} is not a prime number`);
    return false;
  }
  // ! 6k +- 1
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      //   console.log(`${num} is not a prime number`);
      return false;
    }
  }
  //   console.log(`${num} is a prime number`);
  return true;
}

function printPrimeNums(num) {
  for (let i = 0; i <= num; i++) {
    if (primeNums(i)) {
      console.log(`${i} is a prime number`);
    }
  }
}

printPrimeNums(10);

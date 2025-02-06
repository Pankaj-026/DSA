let x = 3;
let n = 5;

var myPow = function (x, n) {
  if (n == 0) return 1;
  if (x == 0) return 0;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
    let ans = 1;

    while (n > 0) {
      if (n % 2 === 1) {
        ans *= x;
      }
      x *= x;
      n = Math.floor(n/2);
    }
    return ans;

  //   let ans = 1;
  //   for (let i = 0; i < n; i++) {
  //     ans *= x;
  //   }
  //   return ans;
};

console.log(myPow(3, 5));

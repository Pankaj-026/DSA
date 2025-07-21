// Todo: Square Partern

// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (let j = 0; j < 4; j++) {
//         row += "*"
//     }
//     console.log(row);
// }

// Todo: Right-Angled Star Triangle

// for (let i = 0; i <= 4; i++) {
//     let row = ""
//     for (let j = 0; j < i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


// Todo: Print a Right-Angled Number Triangle

// for (let i = 0; i <= 4; i++) {
//     let row = ""
//     for (let j = 1; j <= i; j++) {
//         row += j
//     }
//     console.log(row);

// }

// Todo: Right Angle Triangle of Repeated Number

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i;
//   }
//   console.log(row);
// }


// Todo:  Right Angle Triangle of Number in Reverse

// for (let i = 0; i < 4; i++) {
//   let row = "";
//   for (let j = 1; j <= 4 - i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// Todo: Right-Aligned Right-Angled Triangle of Stars
let n = 4

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 1; j < n - i; j++) {
    row += " "
  }
  for (let k = n; k >= n-i; k--) {
    row += "*"
  }
  console.log(row);
}

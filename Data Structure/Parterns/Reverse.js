//! Reverse Partern

// ? Reverse Number pattern

//todo: n = 4
// 1
// 21
// 321
// 4321

// let n = 4

// for (let i = 1; i <= n; i++) {
//   let print = "";
//   for (let j = i; j > 0; j--) {
//     print += `${j} `;
//   }
//   console.log(print);
// //   console.log(typeof(print));
// }

// ? Reverse Interted Triangle pattern

//todo: n = 4
// 1111
//  222
//   33
//    4

let n = 4;

for (let i = 1; i <= n; i++) {
  let print = "";

  // space
  for (let j = 1; j < i; j++) {
    print += " ";
  }

  // numms
  for (let k = 0; k <= n - i; k++) {
    print += `${i}`;
  }
  console.log(print);
}

//! Triangle Partern

// ? asterisk pattern

//todo: n = 4
// *
// **
// ***
// ****

// let n = 1;
// for (let i = 0; i < n; i++) {
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += `* `;
//   }
//   console.log(print);
// }

// ? numbers pattern

//todo: n = 4

// 1
// 22
// 333
// 4444

// 1
// 12
// 123
// 1234

// let n = 4;

// for (let i = 0; i < n; i++) {
//   //   let num = 1;
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += `${i + 1} `;
//     // print += `${num++} `;
//   }
//   console.log(print);
// }


// ? numbers pattern

//todo: n = 4

// 1
// 23
// 456
// 78910

let n = 4;
let num = 1;

for (let i = 0; i < n; i++) {
  let print = "";
  for (let j = 0; j <= i; j++) {
    print += `${num++} \t`
  }
  console.log(print);
}

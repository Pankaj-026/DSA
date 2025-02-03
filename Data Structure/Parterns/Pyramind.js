// ? Pyramid Pattern

let n = 4;

// for (let i = 1; i <= n; i++) {
//     let num = 1;
//     let print = ""
//     for(let j = 0; j < n-i; j++) {
//         print += " \t"
//     }
//     for(let j = 0; j < i; j++) {
//         print += `${num++}\t`
//     }
//     for(let j = 1; j < i; j++) {
//         print += `${num-j-1}\t`
//     }

//     console.log(print);
// }

for (let i = 0; i < n; i++) {
    let print = "";

  for (let j = 0; j < n - i - 1; j++) {
    print += " \t";
  }
  
  for (let j = 1; j <= i + 1; j++) {
    print += `${j}\t`;
  }
  for (let j = i; j > 0; j--) {
    print += `${j}\t`;
  }

  console.log(`${print}\n`);
}

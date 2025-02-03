let n = 4;

for (let i = 0; i < n; i++) {
  let print = "";
  for (let j = 0; j <= i; j++) {
    print += `*\t`;
  }

  for (let j = 0; j <= n - i * 2 + 1; j++) {
    print += " \t";
  }

  for (let j = 0; j <= i; j++) {
    print += `*\t`;
  }
  console.log(print);
}

for (let i = 0; i < n; i++) {
  let print = "";
  for (let j = n; j > i; j--) {
    print += `*\t`;
  }

  for (let j = 0; j < i * 2; j++) {
    print += ` \t`;
  }

  for (let j = n; j > i; j--) {
    print += `*\t`;
  }

  console.log(print);
}

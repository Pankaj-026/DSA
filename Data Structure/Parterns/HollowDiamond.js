let n = 4;

for (let i = 0; i < n; i++) {
  let print = "";
  for (let j = 0; j < n - i - 1; j++) {
    print += " \t";
  }
  print += "*\t";

  if (i != 0) {
    for (let j = 0; j < 2 * i - 1; j++) {
      print += " \t";
    }
    print += "*\t";
  }

  console.log(print);
}

for (let i = n - 2; i >= 0; i--) {
  let print = "";
  for (let j = 0; j < n - i - 1; j++) {
    print += " \t";
  }
  print += "*\t";

  if (i != 0) {
    for (let j = 0; j < 2 * i - 1; j++) {
      print += " \t";
    }
    print += "*\t";
  }
  console.log(print);
}

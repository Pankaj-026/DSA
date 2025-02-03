let arr = [0, 15, 22, 12, 24, -1];
let smallest = arr[0];
let biggest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (smallest > arr[i]) {
    smallest = arr[i];
  }

  if (biggest < arr[i]) {
    biggest = arr[i];
  }
}

console.log(smallest, biggest);
console.log(Math.min(...arr), Math.max(...arr));

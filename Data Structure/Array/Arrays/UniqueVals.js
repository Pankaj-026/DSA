let arr = [1, 2, 3, 1, 2, 3, 4, 5];

function uniqueValues(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {

    const num = arr[i];
    if(arr.indexOf(num) === arr.lastIndexOf(num)){
      result.push(num);
    }
  }
  return result;
}

function uniqueValues2(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] === arr[i]){
        count++;
      }
    }

    if(count === 1  ){
      result.push(arr[i]);
    }
  }
  
  return result;

}

// console.log(uniqueValues(arr));
console.log(uniqueValues2(arr));
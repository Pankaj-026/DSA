var addTwoNumbers = function (l1, l2) {
    let a = Number(l1.join(""))
    let b = Number(l2.join(""))
    
    return  String(a + b).split("")
    
};

let l1 = [2, 4, 3], l2 = [5, 6, 4]

console.log(addTwoNumbers(l1, l2))
let i = 1;
function printToN(n) {
    if(i == n+1) return 0;

    console.log(i);
    i++
    printToN(n)
    
}

printToN(5)
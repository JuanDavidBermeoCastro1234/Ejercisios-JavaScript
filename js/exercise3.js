let n = 15;

let result = []

do{
    if (n%2 != 0){
        n = n*3+1
        result.push(n)
    } else if (n%2 == 0){
        n = n/2
        result.push(n)
    }
} while (n != 1)

console.log (` este es el proceso de collatz ${result}`)
function isPrime() {
let n =+prompt('N = ?')
console.log('n = ', n)
let k
let c=0
while (n>0) { 
    k = n % 10;
    n= (n-n % 10)/10
    c++
}
console.log('NumberTrue = ', c)
}

for(let i = 1; i<=2; i++){
        isPrime()
    }




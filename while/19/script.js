let n = +prompt('Введите n=','') 
let k
let a=0

console.log('n = ' +  n)

while (n>0) { 
    k = n % 10;
    a=a*10+k
    n= (n-n % 10)/10
    console.log(k)
   
} 


console.log(a)


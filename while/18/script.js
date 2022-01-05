let n = +prompt('Введите n=','') 
let k
let sum=0
let num=0
console.log('n = ' +  n)
while (n>0) { 
    k = n % 10;
    n= (n-n % 10)/10
   sum=sum+k
   ++num
}

console.log('sum = ' + sum)
console.log('Количество = ' + num)

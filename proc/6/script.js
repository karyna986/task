function num() {
let k 
let c = 0
let sum = 0

let n = +prompt('Введите n = ','') 
 console.log('n = ' + n)
    while (n>0) { 
        k = n % 10;
        n= (n-n % 10)/10
       sum=sum+k
      ++c
    }

   
    console.log('Количество цифер = ' + c)
    console.log('sum = ' + sum)
}

for(let i=1; i<=5; i++){
    num()
}
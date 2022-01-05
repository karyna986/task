let n = +prompt('Введите n=','') 
let k

while (n>0) { 
    k = n % 10;
    n= (n-n % 10)/10
   console.log(k)
}

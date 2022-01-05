let n = +prompt('Введите число Фиботаччи n=','') 
let f1 = 1
let f2 = 1
let f = 0
console.log('f = ' + n)



    while (f < n) 
{
    f = f2 + f1;
    f2 = f1;
    f1 = f;
  
    
} 

console.log('f2 = ', f2+f)
console.log('f1 = ', f+f2-f1)





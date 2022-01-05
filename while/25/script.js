let n = +prompt('Введите n=','') 
let f1 = 1
let f2 = 1
let f = 0
console.log('n = ' + n)

while (f < n) 
{
    if (n>f) {
        f = f2 + f1;
        f2 = f1;
        f1 = f;
    }
    else {
    }
    
} 
console.log('f = ' + f)



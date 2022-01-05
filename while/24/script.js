let n = +prompt('Введите  n=','') 
let f1 = 1
let f2 = 1
let f = 0

console.log('n = ' + n)

while (f < n) {
    f = f2 + f1;
    f2 = f1;
    f1 = f;
    
} 
console.log('f = ' + f)
if (f==n){
        console.log('True')
    }
    else {
        console.log('False')
    }


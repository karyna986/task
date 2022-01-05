let a = +prompt('Введите a=','') 
let b = +prompt('Введите b=','') 


console.log('a = ' + a)
console.log('b = ' + b)

while (a!=0 && b!=0){
    
    if (a>b) {
        a=a%b
    }
    else {
        b=b%a
       
    }
}
console.log('НОД = ', a+b)
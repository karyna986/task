function isPrime(){
let n = +prompt('Введите степень n=','') 
let p = 1



for (let i=1; i<=n; i++) {
    p=p*i 
}
console.log(`${n}! = `+ p)
}  


for(let i = 1; i<=5; i++){
isPrime()
}
 
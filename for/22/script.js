let x = +prompt('Введите число x=','')
let n = +prompt('Введите степень n=','') 
let p = 1
let sum =1
let degree

console.log(`x = `+ x)
console.log(`n = `+ n )

for (let i=1; i<=n; i++) {
    p=p*i
    degree = Math.pow(x,i)
    sum=sum+degree/p
   console.log(`${i}! = `+ p)
   console.log(`x^${i} = `+ degree )
}

console.log(`sum= `+ sum.toFixed(2))
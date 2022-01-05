let n = +prompt('Введите степень n=','') 
let p = 1
let sum =0


for (let i=1; i<=n; i++) {
    p=p*i
    sum=sum+p
    
   console.log(`${i}! = `+ p)
}

console.log(`n! = `+ sum)

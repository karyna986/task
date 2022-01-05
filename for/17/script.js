let a =+prompt('Введите a=','')
let n = +prompt('Введите степень n=','') 
let p = 1
let sum =0
console.log('а = '+ a)
console.log('n = '+ n)

for (let i=0; i<=n; i++) {
    p=Math.pow(a,i)
   console.log(`а^${i} = `+ p) 

   sum+=p
}
console.log(`sum = `+ sum)
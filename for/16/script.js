let a =+prompt('Введите a=','')
let n = +prompt('Введите степень n=','') 
let p = 1

console.log('а = '+ a)
console.log('n = '+ n)

for (let i=1; i<=n; i++) {
   p=p*a 
   console.log(`а^${i} = `+ p)
}


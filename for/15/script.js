let a =+prompt('Введите a=','')
let n = +prompt('Введите степень n=','') 
let p = 0

for (let i=1; i<=n; i++) {
   p=Math.pow(a,n)
}
console.log('а = '+ a)
console.log('n = '+ n)
 console.log('а^n = '+ p)

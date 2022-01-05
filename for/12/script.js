let n = +prompt('Введите n=','') 
let p = 1
let a = 1
for (let i=0; i<n; ++i) {
   a += 0.1; 
   p *= a;
    console.log( a.toFixed(1) ) //округление до 1й цифры после комы
}
 console.log('p = '+ p.toFixed(1))




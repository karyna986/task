let n = +prompt('Введите n=','') 
let p = 0
let a = 1
let deeg
for (let i=0; i<n; ++i) {
    deeg = Math.pow((-1),i)
    a += 0.1; 
    p += deeg*a;



    console.log(deeg*a.toFixed(1) ) //округление до 1й цифры после комы
}
 console.log('p = '+ p.toFixed(1))




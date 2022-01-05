// Задача 23
console.log('Задача 23')

let a1 = 1
let a2 = 1
let b1 = 1
let b2 = 3
let c1 = 4
let c2 = 3
let d1
let d2

if (a1==b1) {
     d1=c1
    console.log(d1)
}
else if (b1==c1) {
    d1=a1
    console.log(d1)
}
else{ 
    d1=b1
    console.log(d1)
}


if (a2==b2) {
    d2=c2
   console.log(d2)
}
else if (b2==c2) {
   d2=a2
   console.log(d2)
}
else{ 
   d2=b2
   console.log(d2)
}

console.log("D="+ "("+`${d1}`+ ','+`${d2}`+")")


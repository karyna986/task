let p =+prompt('Введите процент p','')
let s = 10
let k = 1
let d = 10

if(p>0 && p<50) {
      while (s<=200) {
      ++k
      d += d * p / 100
      s += d
   }
   console.log('Путь = ' + s.toFixed(0)+'км')
   console.log( k + ' дней')
}
else {
   console.log('Введите процент 0<p<50')
}

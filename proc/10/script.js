
let a = +prompt('A = ?')
let b = +prompt('B = ?')
let c = +prompt('C = ?')
let d = +prompt('D = ?')


console.log(a, b, c ,d)
 
function add(x,y) {
if (x>0 && y>0){
    x=x+y;
    y=x-y;
    x=x-y;

    console.log(x, y)
}
else {
    console.log('Неверное значение')
}
   
}
add(a,b)
add(b,c)
add(c,d)
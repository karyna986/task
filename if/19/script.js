let x1 = 1 //порядковый номер 1
let x2 = 5 //порядковый номер 2
let x3 = 5 //порядковый номер 3
let x4 = 5 //порядковый номер 4

if ( (x1 == x2)  && (x1 == x3) ) {
    console.log('4')
    
}
else if( (x1 == x2)  && (x1 == x4)) {
    console.log('3')
 
}
else if( (x1 == x3)  && (x1 == x4)) {
    console.log('2')
 
}
else {
    console.log('1')
}



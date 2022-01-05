
let x1 = prompt('x1?','') 
let y1 = prompt(' y1?','') 
let x2 = prompt('x2?','') 
let y2 = prompt(' y1 ?','') 
if (x1>8 || x2>8 ||  y1>8 || y2>8) {
    console.log('Введите числа меньше 8')
    
}
else {
    if((x1-x2)==(y1-y2)|| (x1-x2)==((-1)*(y1-y2))|| (x1==x2)|| (y1==y2)){
    console.log(x1-x2, '=', y1-y2)
    console.log('True')
    
    }
    else{
        console.log(x1-x2,  y1-y2)
        console.log('False')
}
}



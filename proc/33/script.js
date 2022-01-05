
function isPrime(){

  
    let angle =prompt('Введите угол в радианах')
    console.log('В радианах = ', angle)

    if (angle>=0 && angle<=6.28 ) {
       let R=(angle*180)/3.14
        console.log('В градусах = '+ R.toFixed(0));
    }
    else {
        console.log( 'Введите другой угол от 0 до 2П(6.28)' );
    }
   
}  
for(let i = 1; i<=5; i++){
isPrime()
}
 



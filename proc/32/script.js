
function isPrime(){



        let angle =prompt('Введите угол в градусах')
        console.log('В градусах = ', angle)
    
        if (angle>=0 && angle<=360 ) {
           let R=(angle*3.14)/180
            console.log('В радианах = '+ R.toFixed(3));
        }
        else {
            console.log( 'Введите другой угол от 0 до 360' );
        }
       
 }  
 for(let i = 1; i<=5; i++){
    isPrime()
  }
       




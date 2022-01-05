let n =prompt('Какую по счету цифру вы хотите узнать ?')
        console.log('n = ', n)

function isPrime(){



        let str =prompt('Введите цифры')
        console.log('K = ', str)
        
        let k=str.length
        if (k>=n) {
            console.log( `${n}я цыфра - ` , str[n-1]);
        }
        else {
            console.log(  "-1" );
        }
       
 }  
 for(let i = 1; i<=5; i++){
    isPrime()
  }
       
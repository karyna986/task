
let c=0
function isPrime(){

        let str =prompt('Введите цифры')
        console.log('K = ', str)
        
        let strNew = ''
        for (i = str.length-1; i >= 0; i--) {
            strNew  += str[i];
          }
        console.log('strNew = ', strNew)

        if (str === strNew) {
            console.log( 'True');
            c++
        }
        else {
            console.log(  'False' );
        }
       
 }  
 for(let i = 1; i<=10; i++){
    isPrime()
  }
  console.log('Количество палиндромов = ', c)
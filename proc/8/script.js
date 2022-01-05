let k = +prompt('Введите k=','') 
    console.log('k = ' +  k)

function num() {
    let d = +prompt('Введите d=','') 
    if(d<=9){
        k = k*10 + d;  
        console.log('newK = ' +  k)   
    }
           else {
            alert('Введите правильное значение d<=9') 
            num()
           }  
      
}  

   
   for(let i=1; i<=2; i++){
       num()
   }



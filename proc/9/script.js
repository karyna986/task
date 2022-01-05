let k = prompt('Введите k=','') 
    console.log('k = ' +  k)

function num() {
    let d1 = prompt('Введите d=','') 
    let d2 = prompt('Введите d=','') 
    if(d1<=9 && d2<=9){
        console.log('newK1 = ',  d1+k) 
        console.log('newK2 = ',  d2+d1+k)  
        
    }
           else {
            alert('Введите правильное значение d<=9') 
            console.log('Введите правильное значение d<=9')
            console.log('Обновите страницу и попробуйте снова')
           }  
      
}  
num()

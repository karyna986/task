let c = 0

function num() {
 
    let k = +prompt('K = ?')
     if(k>0){
         console.log('k = '+k)
        let n = Math.sqrt(k)
    
        if (n%1 == 0){
        c++ 
        console.log('true')
    
            }
            else {
                console.log('false') 
            } 
}
    
   else {
    console.log('Ведите k>0') 
} 

}

for(let i = 1; i<=10; i++){
    num() 
  }
  
console.log('NumberTrue = ', c)
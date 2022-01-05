let c = 0
 let n = +prompt('n = ?')
 console.log('n = '+n)
function num() {
 
    let k = +prompt('K = ?')
   
     if(k>0){
         console.log('k = '+k)
         while ((k > 0) && ((k % n) == 0)) {
            k=k/n
        }

        if (k==1){
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


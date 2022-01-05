let n = +prompt('Введите n=','') 
let k=2

while ( k<n-1 ) { 
    ++k
    if( (n % k) === 0 ){
            console.log('false') 
            break
        }
        else {
        
            console.log('true') 
            break
 }
}

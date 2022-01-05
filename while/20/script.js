let n = +prompt('Введите n=','') 
let k
  

while (n>0) { 
    k = n % 10;
    n= (n-n % 10)/10
   console.log(k)

if(n>0&&k==2){
            console.log('true') 
        }
        else {
            console.log('false') 
        }

}    


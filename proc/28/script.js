
let c=0

function isPrime() {
let num =+prompt('N = ?')
console.log('n = ', num)
let flag = true;

for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
      c++
		break; 
	}
    
   
}

console.log(flag);
}

for(let i = 1; i<=10; i++){
        isPrime()
    }
console.log('NumberTrue = ', 10-c)
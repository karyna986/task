function add() {
  let numbers = [];

    numbers[0]=+prompt('A = ?')
    numbers[1]=+prompt('b = ?')
    numbers[2]=+prompt('c = ?')


console.log(numbers);


numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);
}

for(let i = 1; i<3; i++){
  alert('Введите числа для масива')
  add() 
}

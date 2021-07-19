//Hoisting - içamento
console.log(sobrenome);//undefined
console.log(nome);//undefined

var nome = null;//So funciona com VAR
var sobrenome = 'Bispo';//so funciona com VAR

console.log(nome);//null
console.log(sobrenome);//Bispo

nome = 'Daniel';
console.log(nome);//Daniel

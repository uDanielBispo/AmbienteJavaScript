// length: mostra o numero de itens
var arr = [1,2,3,4,5];
console.log(arr.length);

//push: adiciona ao fim
arr.push(6);
console.log(arr);

//pop: remove o ultimo elemento
arr.pop();
console.log(arr);

//unshift: adiciona ao inicio
arr.unshift(0);
arr.unshift('teste');
console.log(arr);

//shift: remove o primeiro elemento
arr.shift();
console.log(arr);

//acessar o ultimo elemento
console.log(arr[arr.length -1]);

//isArray: ve se é um array
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

//splice

var arr = [1,2,3,4,5];

arr.splice( 2 /*indice */, 0 /*numeros deletados */, 999 /*elemento adicionado*/);
console.log(arr);

arr.splice(4, 1);
console.log(arr);

//indexOf
console.log(arr.indexOf(5));

//join
var arr2 = ['o', 'rato', 'roeu', 'a', 'roupa']

console.log(arr2.join(' '));

//reverse
console.log(arr2.reverse());
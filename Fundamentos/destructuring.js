/*
O destructuring é um recurso utilizado para
desestruturar arrays e objetos, na maioria das
vezes.
A partir de uma expressão podemos criar
várias variáveis com os valores destes
conjuntos de dados, veja:
*/ 

let array = [1,2,3];
[a,b,c] = array;
console.log(a, b, c);
console.log(c, b, a);
console.log(c, c, c);

/*
O destructuring em arrays é realizado
utilizando o [] e em objetos o {}
*/
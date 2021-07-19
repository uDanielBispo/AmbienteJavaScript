//length: mostra o numero de caracteres, por exemplo: DANIEL = 6 ou entao '' = 0, bastante usado pra conferir se o usuario preencheu o form
var nome = 'Daniel';
console.log(nome.length);

var bola = 'obj';
console.log(bola.length);

//indexOf: ele pega a posição da palavra dentro da frase, onde ela inicia
console.log(nome[0]);

var frase = 'tres tigres tristes';

console.log(frase.indexOf('tigres'))

//slice: pega uma parte do texto e manipula dentro de uma variavel
var tigres = frase.slice(5,11);
console.log(tigres)

//replace: pode substituir uma frase ou qualquer outra coisa
var novafrase = frase.replace('tigres', 'Danieis');
console.log(novafrase);

//toLowerCase && toUpperCase
var frase = 'Esta é A Frase Que Manipularemos'
console.log('Frase normal..: '+ frase);
console.log('Frase em Low..: '+frase.toLowerCase());
console.log('Frase em Upper: '+frase.toUpperCase());

//Trim
var nome = '               Daniel                ';
var nomeTrim = nome.trim();
console.log('Sem trim:'+nome);
console.log('Com trim:'+nomeTrim);

//split

console.log('Com split:'+frase.split(' '));

var tags = 'PHP, JS, HTML, CSS, HTML';
console.log(tags.split(' '));

//lastIndexOf
var fraseDois = 'Eu quero a ultima palavra teste desta frase teste';

console.log(fraseDois.indexOf('teste'));//primeira palavra teste
console.log(fraseDois.lastIndexOf('teste'));//ultima palavra teste









console.log('\n \n \n \n \n \n \n \n \n \n \n \n')
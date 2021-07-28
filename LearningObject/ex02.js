let pessoa = {
    nome:'Daniel',
    idade: 18,
    falar: function(){console.log('Olá tudo bem?')},
    soma: function(a,b){return a+b;}
};
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar();

var soma = pessoa.soma(1,3);
console.log(soma);
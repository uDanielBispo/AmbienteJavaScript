let pessoa ={
    nome: 'daniel',
    idade: 18,
    falar: function(){console.log('Olá, tudo bem?');},
    dizerNome: function(){console.log('Meu nome é '+this.nome);},
    aniversario: function(){this.idade += 1},
}
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);

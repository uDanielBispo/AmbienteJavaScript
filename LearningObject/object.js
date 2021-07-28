//primeiro contato com objetos.
let amigo = 
{
    nome:'Maria', 
    peso: 50,
    engordar(p)
    {
        console.log(`engordou ${p} kilos`)
        this.peso += p
    }
}
amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg \n`)

//================================================\\

class Carro{
    constructor/*Carro*/(nome){
        this.nome = nome;
        console.log(`Novo Carro ${this.nome}`);
    }
}

let c1 = new Carro('Vectra');
let c2 = new Carro('Monza');
let c3 = new Carro('Fusca');
let c4 = new Carro('Ômega');

//================================================\\

class Pessoa{}
Pessoa.prototype.falar = function(){console.log('Olá!')}

const daniel = new Pessoa;
daniel.falar();
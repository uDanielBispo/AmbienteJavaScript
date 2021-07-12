//primeiro contato com objetos.
let amigo = 
{
    nome:'Maria', 
    peso: 50,
    engordar(p=0)
    {
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
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
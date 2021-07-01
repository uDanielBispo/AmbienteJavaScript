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
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

//================================================\\
class Pessoa
{
    Nome = 'Daniel';
}
let Daniel = new Pessoa
console.log(Daniel)


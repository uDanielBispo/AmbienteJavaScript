
class Carro{ 
    static alerta = true;
     
    constructor/*Carro*/(nome, cor, modelo, marca){
        this.cor = cor; //fazendo referencia ao carro
        this.nome = nome;
        this.modelo = modelo;
        this.marca = marca;
        this.ligado = false;
        this.km = 0;
        this.comb= 10;
    }
    info(){
        console.log(`
        Carro......: ${this.nome}
        Cor........: ${this.cor} 
        Modelo.....: ${this.modelo}
        Marca......: ${this.marca}
        Ligado.....: ${this.ligado ? 'SIM' : 'NÃO'}
        KM.........: ${this.km}km
        Combustível: ${this.comb}L
        Alerta.....: ${Carro.alerta ? 'SIM' : 'NÃO'}
        `)
    }
    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
    set Comb(combValue){ //usando a SET
        this.comb = combValue;
        console.log(`Combustivel alterado no carro ${this.nome}, valor atual ${this.comb}L `)
    }
    get Comb(){
        return this.comb
    }
 }
let c1 = new Carro('Vectra' ,'dourado', 'Sedan', 'Chevrolet');
let c2 = new Carro('Monza' ,'Vermelho', 'Sedan', 'Chevrolet');
let c3 = new Carro('Fusca','Branco', 'Hatch', 'Volkswagen');
let c4 = new Carro('Ômega' ,'Preto fosco', 'Sedan', 'Chevrolet');

c1.Comb=100
c2.Comb=20
c1.cor='Prata'//da pra alterar

console.log(c1.Comb)

c3.ligar();
c1.ligar();

c1.info()//com isso da pra pegar uma informação por vez
/*c2.info();
c3.info();
c4.info();*/

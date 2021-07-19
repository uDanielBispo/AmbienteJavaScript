 let x = 5; // == var x = 5

 x = 12;//pode ser alterada

 console.log(x);

 if (true) {
     let x = 20; //variavel local, só vale aqui dentro
     console.log(x);
 }

 console.log(x);//mesmo valor no escopo global

 console.log(`==================================================== \n `);

 var y = 5; // Se usamos var no lugar de let

 y = 12;//pode ser alterada

 console.log(y);

 if (true) {
     var y = 20; // valor alterado em todos os escopos
     console.log(y);
 }
 console.log(y);//o valor é alterado dentro do escopo do if

 console.log(`==================================================== \n `);
 
 const z = 10;// Se usamos const no lugar de let

 //z = 15; nao podemos alterar seu valor pq ela é 'constante'

 console.log('const z = ' + z);

if (true) {
    const z = 5;
    console.log('nova declaração em novo escopo: const z = ' + z);//no escopo da pra criar uma const com o mesmo nome da de fora

}

console.log(`==================================================== \n `);

let i = 15619516;

for (let i=0; i < 10; i++) {//esse let i só vale no (for)
    console.log(i);
}

console.log(i);
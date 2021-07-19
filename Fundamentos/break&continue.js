/*
    Com break paramos a instrução
    Com continue podemos pular a instrução
    Muito usados em loops
*/
for (let i = 10; i > 0; i--) {
    console.log(i);
    if(i===5){
        break;
    }

}

console.log(`Deu o Break \n`);

var x = 10
while(x <100){
    x+=10;
    if (x===60 || x===90){
        console.log('CONTINUE')
        continue;
    }
    console.log('Testando continue' + x)
}
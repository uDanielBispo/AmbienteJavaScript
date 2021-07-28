/*
As callbacks no JavaScript servem como
funções em argumentos, que serão executadas
após uma determinada ação.
Vejamos um exemplo clássico de callback:
*/

setTimeout(function(){
    console.log('Ativando Callback');
}, 300);

/*
No método setTimeout temos um argumento
que é uma função callback.
A mesma será executada ao fim do tempo
determinado pelo setTimeout.
*/
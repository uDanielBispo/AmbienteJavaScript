//=================================================\\

//teste 00\\
function Soma(Number1, Number2)
{
    return Number(Number1) + Number(Number2);
}
console.log(`Teste 0: ${Soma(5,10)}`);
//=================================================\\

//teste 01\\
function Subtração(Number1, Number2)
{
    return Number(Number1) - Number(Number2);
}
const Subtracao = Subtração(10,5);
console.log(`Teste 1: ${Subtracao}`);
//=================================================\\

//teste 02\\
function SomaTudoArrays(Vetor)
{
    let total = 0;
    for(let num of Vetor)
    {
        total += num
    }
    return total;
}
console.log(`Teste 2: ${SomaTudoArrays([5,3,7,10,9,12])}`)
//=================================================\\

//teste 03\\
function SomandoDoMeuJeitoArrays(Numeros) 
{
    let soma = 0;
    for(let res in Numeros)
    {
        soma += Numeros[res]
    }
    return soma;
}
console.log(`Teste 3: ${SomandoDoMeuJeitoArrays([5,3,7,10,9,12])}`)
//=================================================\\

//teste 04\\
function EscreverEndereco(Rua, Cidade, Pais, ...complementos)
{
    console.log(`Teste 4: ${Rua}, ${Cidade}, ${Pais}, ${complementos}`);
}
EscreverEndereco('Rua Programador a Bordo', 'São Paulo',
'Brasil', 'Estado de SP', 'CEP: 123.123.123');
//=================================================\\

//teste 04\\
(function AutoExecutavel(nome) {
    console.log('Texte 5:', nome);
}('Daniel'))
//=================================================\\

//  teste 06 Função >anonima<  \\
var SubtraiDoisNumeros = function /*Subtrai*/(a, b){return a-b;};
console.log(`Teste 6: ${SubtraiDoisNumeros(10,3)}`)
//=================================================\\

//teste 07 Funçoes CallBack\\//LOUCURA TOTAL\\
function SomaCallBack(a, b, fnCallBack)
{
    return fnCallBack(a+b);
}
console.log(`Teste 7: ${SomaCallBack(10,3, function(total){
    return total*2;
})}`)

//=================================================\\

//teste 08 Funçoes CallBack denovo\\//LOUCURA TOTAL\\
function SomaCallBack2(c, d, fnCallBack2)
{
    return fnCallBack2(c+d);
}
var multiplica = function(total)
{
    return total *2;
}
console.log(`Teste 7: ${SomaCallBack2(10,10, multiplica)}`) 

console.log(`Teste 7: ${SomaCallBack2(5,2, function(total)
{
    return total +20;
})}`) 
console.log(`Teste 7: ${SomaCallBack2(23,11, function(total)
    {
        return total /2;
})}`) 



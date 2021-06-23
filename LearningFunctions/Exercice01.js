//=================================================\\

//texte 00\\
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

//texte 02\\
function SomaTudo(Vetor)
{
    let total = 0;
    for(let num of Vetor)
    {
        total += num
    }
    return total;
}
console.log(`Teste 2: ${SomaTudo([5,3,7,10,9,12])}`)
//=================================================\\

//texte 03\\
function SomandoDoMeuJeito(Numeros) 
{
    let soma = 0;
    for(let res in Numeros)
    {
        soma += Numeros[res]
    }
    return soma;
}
console.log(`Teste 3: ${SomandoDoMeuJeito([5,3,7,10,9,12])}`)
//=================================================\\

//texte 04\\
function EscreverEndereco(Rua, Cidade, Pais, ...complementos)
{
    console.log(`Teste 4: ${Rua}, ${Cidade}, ${Pais}, ${complementos}`);
}
EscreverEndereco('Rua Programador a Bordo', 'São Paulo',
'Brasil', 'Estado de SP', 'CEP: 123.123.123');
//=================================================\\

//texte 04\\
(function AutoExecutavel(nome) {
    console.log('Texte 5:', nome);
}('Daniel'))
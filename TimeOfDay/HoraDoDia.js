//função executada assim que carregar
function carregar()
{
    //Declarando variaveis usadas na implementação HTML
    let foto = document.getElementById('foto');
    let Mensagem = document.getElementById('mensagem');

    //retirando a informação (Hora e Minuto) do computador do usuario e alocando-as em variaveis 
    let PegandoHora = new Date();
    let PegandoMinutos = new Date();
    let HoraDoUsuario = PegandoHora.getHours();
    let MinutosDoUsuario = PegandoMinutos.getMinutes();

    //Lógica para que os minutos NÃO fiquem assim: 16:5
    if(MinutosDoUsuario < 10)

    {Mensagem.innerHTML = `Agora são ${HoraDoUsuario}:0${MinutosDoUsuario} Horas`}//lógica para que fiquem assim ex: 16:05
    else    
    {Mensagem.innerHTML = `Agora são ${HoraDoUsuario}:${MinutosDoUsuario} Horas`}
    
    //Lógica do programa de acordo com o periodo do dia
    //MANHÃ
    if(HoraDoUsuario >= 0 && HoraDoUsuario < 12)
    {      
        Mensagem.innerHTML += "<br>BOM DIA!"  
        foto.src = "foto-Manha.jpg"   
        document.body.style.background = "rgb(0, 179, 119)" 
    }
    //TARDE
    else if(HoraDoUsuario >= 12 && HoraDoUsuario < 18)
    {
        Mensagem.innerHTML += "<br>BOA TARDE!"
        foto.src = "foto-FimDeTarde.jpg"
        document.body.style.background = "rgb(223, 145, 0)"
    }
    //NOITE
    else 
    {
        Mensagem.innerHTML += "<br>BOA NOITE!"
        foto.src = "foto-Noite.jpg"
        document.body.style.background = "black"
    }
}
   
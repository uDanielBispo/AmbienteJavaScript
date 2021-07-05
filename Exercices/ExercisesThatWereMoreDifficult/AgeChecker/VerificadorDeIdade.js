function Verificar()
{
    let Resposta = document.getElementById("Resultado");
    let Foto = document.getElementById('Foto'); 

    //Recebendo ano da maquina do usuario
    let RecebendoAnoAtual = new Date;
    let AnoAtual = RecebendoAnoAtual.getUTCFullYear();

    //Recebendo o ano de nascimento
    let AnoDeNascimento = document.getElementById("AnoDeNascimento");
   
    /*Lógica para validar a idade*/

    //Caso não preenchido
    if(AnoDeNascimento.value.length == 0) 
    {alert('Local: (Ano de Nascimento), não preenchido');}
    //Caso ano de nascimento MUITO pequeno
    else if(AnoDeNascimento.value < 1890)
    {alert('Ano invalido');}
    //Caso ano de nascimento pequeno mas nao tanto
    else if(AnoDeNascimento.value <= 1910)
    {alert('Voce realmente tem mais de 110 anos?');}
    //Caso ano de nascimento maior que ano atual
    else if(AnoDeNascimento.value > AnoAtual)
    {alert('O ano em que você está é menor do que o ano de seu Nascimento');}

    //Caso a idade seja valida
    else 
    {
        let Idade = AnoAtual - AnoDeNascimento.value;
        let Sexo = document.getElementsByName("Sexo");
        let Genêro = '';
           
        /*Lógica para entender gênero*/

        //Caso selecione M4,asculino
        if(Sexo[0].checked)
        {
            Genêro = 'Homem'
            //CRIANÇA
            if(Idade < 12)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-bebe-m.png";
            }
            //JOVEM
            else if(Idade < 21)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-jovem-m.png";
            }
            //ADULTO
            else if(Idade < 55)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-adulto-m.png";
            }
            //IDOSO
            else 
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-Idoso-m.png";
            }
        }

        //Caso selecione Feminino
        else if(Sexo[1].checked)
        {
            Genêro = 'Mulher'
            //CRIANÇA
            if(Idade < 12)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-bebe-f.png";
            }
            //JOVEM
            else if(Idade < 21)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-jovem-f.png";
            }
            //ADULTO
            else if(Idade < 55)
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-adulto-f.png";
            }
            //IDOSO
            else 
            {
                Resposta.innerHTML = `Detectamos ${Genêro} de ${Idade} anos`
                Resposta.style.textAlign = 'center';
                Foto.src = "foto-Idoso-f.png";
            }
        }     
    }        
}
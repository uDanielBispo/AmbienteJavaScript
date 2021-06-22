function GenerateMultiplicationTables()
{   
    let Multiplied = document.getElementById('Multiplied');
    if(Multiplied.value.length != 0)
    {      
        //insert in select
        let SelectTimesTables = document.getElementById('SelectTimesTables');
        

        let NumberMultiplied = Number(Multiplied.value);
        SelectTimesTables.innerHTML = ''
        for (let Counter = 1; Counter <= 10 ; Counter++) 
        {
            let OptionTimesTables = document.createElement('option') ;
            OptionTimesTables.text = `${NumberMultiplied} x ${Counter} = ${NumberMultiplied*Counter}`;
            SelectTimesTables.appendChild(OptionTimesTables);
        }        

    }
    else{alert('Fill the space "Number"')}
}
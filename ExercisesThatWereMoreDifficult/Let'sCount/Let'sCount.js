function Count()
{
    Answer.innerHTML = ``;
    let GetStart = document.getElementById('Start');
    let GetEnd = document.getElementById('End');
    let GetStep = document.getElementById('Step');
    let GetAnswer = document.getElementById('Answer');

    let Start = Number(GetStart.value);
    let End = Number(GetEnd.value);
    let Step = Number(GetStep.value);
    let CounterStart = Start;

    Answer.innerHTML += `Contando: <br>`;
   
    //Fill Condition
    if(GetStart.value.length != 0 && GetEnd.value.length != 0 && GetStep.value.length != 0)
    {
        //Step cant be 0
        if(Step != 0)
        {
            //Growing Condition
            if(Start < End)
            {                                 
                for (CounterStart; CounterStart <= End; CounterStart += Step)
                {
                    Answer.innerHTML += `\u{1F449} ${CounterStart} `;
                }
            }
            //Decreasing Condition
            if(Start > End)
            {
                for (CounterStart; CounterStart >= End; CounterStart -= Step)
                {
                    Answer.innerHTML += `\u{1F449} ${CounterStart} `;
                }
            }
        }
        else{alert("Step can't be 0")}
    }
    else{alert('Fill in the gaps.')}

    Answer.innerHTML += `\u{1F3C1}`;
}

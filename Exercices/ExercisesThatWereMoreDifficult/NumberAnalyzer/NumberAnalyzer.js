
let SelectNumbers = document.getElementById('SelectNumbers');
let Answer = document.getElementById('Answer');
let ArrayNumbers = [];
let Numbers = document.getElementById('Numbers')
function AddNumbers() 
{ 
    if(Numbers.value.length != 0)
    {
        if(Numbers.value <= 100 && Numbers.value >= 1)
        {
            if(ArrayNumbers.indexOf(Number(Numbers.value)) == -1)
            {
                ArrayNumbers.push(Number(Numbers.value));
                let OptionNumbers = document.createElement('option');
                OptionNumbers.text = `${Numbers.value} --> ${ArrayNumbers}`;
                SelectNumbers.appendChild(OptionNumbers);
            }
            else{alert('You can put on only 1 time the same number')}
        }
        else{alert('Only numbers between 1 and 100.')}
    }
    else{alert('Fill the space Number.')}
    Numbers.value = ''
    Numbers.focus()
}
function RemoveNumbers(){
        ArrayNumbers.pop();
        let OptionNumbers = document.createElement('option');
      
        if (ArrayNumbers.length == 0 ) {
            OptionNumbers.text = `No values`;
            SelectNumbers.appendChild(OptionNumbers);
        }
        else{
            OptionNumbers.text = `${ArrayNumbers[ArrayNumbers.length -1]} --> ${ArrayNumbers}`;
            SelectNumbers.appendChild(OptionNumbers);
        }
}

function Clear(){
    if (SelectNumbers.options.length != 0) {        
        var length = SelectNumbers.options.length;

        for (i = length-2; i >= 0; i--) {
        SelectNumbers.options[i] = null;
        }
    }
    else{alert('Give some value to clear')}
}

function CheckNumbers() 
{   
    let Total = ArrayNumbers.length;
    if(Total != 0)
    {      
        let Bigger = ArrayNumbers[0];
        let Smaller = ArrayNumbers[0]; 
        let Sum = 0;
        let Average = 0;
        //Esse for especial é feito para varrer o array do inicio ao fim
        for(let Position in ArrayNumbers)
        {
            Sum += ArrayNumbers[Position];
            //So interesting
            if(ArrayNumbers[Position] > Bigger)
            {Bigger = ArrayNumbers[Position];}

            if(ArrayNumbers[Position] < Smaller)
            {Smaller = ArrayNumbers[Position];}     
        }
        Average = Sum / Total;
        Answer.innerHTML = '';
        Answer.style.padding = '1px';
        Answer.innerHTML += `<p>The total of Numbers placed are: ${Total}</p>`;
        Answer.innerHTML += `<p>The Bigger number is: ${Bigger}</p>`;
        Answer.innerHTML += `<p>The Smaller number is: ${Smaller}</p>`;
        Answer.innerHTML += `<p>The Sum of numbers is: ${Sum}</p>`;
        Answer.innerHTML += `<p>The Average of numbers is: ${Average}</p>`
    }
    else{alert('Give some value to check')}
}


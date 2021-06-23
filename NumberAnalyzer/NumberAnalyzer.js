
let SelectNumbers = document.getElementById('SelectNumbers');
let ArrayNumbers = [];

function AddNumbers() 
{ 
    let Numbers = document.getElementById('Numbers').value

    if(Numbers.length != 0)
    {
        if(Numbers <= 100 && Numbers >= 1)
        {
            ArrayNumbers.push(Number(Numbers));
            let OptionNumbers = document.createElement('option');
            OptionNumbers.text = `${Numbers} --> ${ArrayNumbers}`;
            SelectNumbers.appendChild(OptionNumbers);
        }
        else{alert('Only numbers between 1 and 100.')}
    }
    else{alert('Fill the space Number.')}

    Numbers.value = '';
    Numbers.focus();
}

function CheckNumbers() 
{
    
}











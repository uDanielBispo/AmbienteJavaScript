
let SelectNumbers = document.getElementById('SelectNumbers');
let Answer = document.getElementById('Answer');
let ArrayNumbers = [];

function AddNumbers() 
{ 
    let Numbers = document.getElementById('Numbers')
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

function CheckNumbers() 
{   
    let Total = ArrayNumbers.length;
    if(Total != 0)
    {      
        let Bigger = ArrayNumbers[0];
        let Smaller = ArrayNumbers[0]; 
        let Sum = 0;
        let Average = 0;
        for(let Position in ArrayNumbers)
        {
            Sum += ArrayNumbers[Position];
            //So interesting
            if(ArrayNumbers[Position] > Bigger)
            {          
                Bigger = ArrayNumbers[Position];
            }
            if(ArrayNumbers[Position] < Smaller)
            {
                Smaller = ArrayNumbers[Position];
            }     
        }
        Average = Sum / Total;
        Answer.innerHTML = '';
        Answer.innerHTML += `<p>The total of Numbers placed are: ${Total}</p>`;
        Answer.innerHTML += `<p>The Bigger number is: ${Bigger}</p>`;
        Answer.innerHTML += `<p>The Smaller number is: ${Smaller}</p>`;
        Answer.innerHTML += `<p>The Sum of numbers is: ${Sum}</p>`;
        Answer.innerHTML += `<p>The Average of numbers is: ${Average}</p>`
    }
    else{alert('Give some value to check')}
}

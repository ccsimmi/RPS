
let pCount = 0; // initialise player Score
let cCount = 0; // initialise computer Score

//grab buttons, ouput to show results and score counters, from the HTML
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const output = document.querySelector('.output')
const ps = document.querySelector('.player-score');
const cs = document.querySelector('.comp-score')

//write functions for when the user selects a button
     const gameR = function(){
        return round('rock', computerPlay());
    }

    const gameP = function(){    
       return round('paper', computerPlay());
    }
    
    const gameS = function(){
        return round('scissors', computerPlay());
    }


//create eventlisteners to fire off when each button is clicked
//when each button is clicked, it invokes the function is has been matched with above
rock.addEventListener('click', gameR);
paper.addEventListener('click', gameP);
scissors.addEventListener('click', gameS);


//computer generates a random number 1 to 3, depending on what is
// returned: output is 'rock' 'paper' or 'scissors'
function computerPlay(){    
let compNum = Math.ceil(Math.random() * 3);
let result;
    switch(compNum){
        case 1:
            result = 'rock';
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'scissors';
            break;
        }
    return result;
};

 // compares computer selection and players selection, updates scores
 // and returns information to the user about each round
function round(playerSelection, computerSelection){    
let result = '';
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        result = 'You lose! Paper beats Rock!';
        cCount++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        result = 'You lose! Scissors beats Paper!'
        cCount++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        result = 'You lose! Rock beats Scissors!';
        cCount++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You win! Rock beats Scissors!';
        pCount++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You win! Paper beats Rock!';
        pCount++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'You win! Scissors beats paper!';
        pCount++;
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        result = 'Draw! You both picked Paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        result = 'Draw! You both picked Scissors!';
    } else {
        result = 'Draw! You both picked Rock!';
    }



    //change the text in the div to the output

    if(pCount == 5) {
        output.style.color = 'lightgreen'; 
        output.textContent = `Hooray! You won ${pCount} to ${cCount}! Refresh to play again :)`;
        ps.textContent = `Score: ${pCount}`;
        cs.textContent = `Score: ${cCount}`;
        //disable buttons after game
        disable();
    } else if (cCount == 5){
        output.style.color = 'red';
        output.textContent = `Bummer! You lost ${cCount} to ${pCount}. Refresh to play again.`;
        ps.textContent = `Score: ${pCount}`;
        cs.textContent = `Score: ${cCount}`;
        disable();
    } else {
        if(result.includes('win!')){
            output.style.color = 'lightgreen';
        }
        else if (result.includes('lose!')){
            output.style.color = 'red';
        }
        else if (result.includes('Draw')){
            output.style.color = 'orange';
        } 

        output.textContent = result; 
        ps.textContent = `Score: ${pCount}`;
        cs.textContent = `Score: ${cCount}`;
    }
};



//function that disables buttons for after a game has finished
function disable(){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true
}
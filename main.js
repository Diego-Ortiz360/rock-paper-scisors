let winnerMatch;
let matchCount;
let winnerGame;
let computerWins = 0;
let playerWins = 0;

const divResult = document.getElementById(`results`);

const printResult = document.createElement(`p`);

divResult.appendChild(printResult);

const getComputerChoice = () => 
{
    const value =  Math.trunc (Math.random()*3);
    
    let choice;
    
    switch (value)
    {
        case 0: choice = "rock";
                break;

        case 1: choice = "paper";
                break;

        case 2: choice = "scisors";
                break;

        default: choice = "Something went wrong, this is an error";
                 break;
    }

    return choice;
    
};


const playRound = (playerSelection) => 
{
        let computerSelection = getComputerChoice();

        let winner = null;

        switch(playerSelection)
        {
                case "rock":
                {
                        if (computerSelection == "rock")
                        {
                                winner = "tie";
                                break;
                        }

                        else if (computerSelection == "paper")
                        {
                                winner = "computer";
                                break;
                        }

                        else if (computerSelection == "scisors")
                        {
                                winner ="player";
                                break;
                        }

                }

                case "paper":
                {
                        if (computerSelection == "paper")
                        {
                                winner = "tie";
                                break;
                        }

                        else if (computerSelection == "scisors")
                        {
                                winner = "computer";
                                break;
                        }

                        else if (computerSelection == "rock")
                        {
                                winner ="player";
                                break;
                        }

                }

                case "scisors":
                {
                        if (computerSelection == "scisors")
                        {
                                winner = "tie";
                                break;
                        }
        
                        else if (computerSelection == "rock")
                        {
                                winner = "computer";
                                break;
                        }
        
                        else if (computerSelection == "paper")
                        {
                                winner ="player";
                                break;
                        }
                }
        }
        
        return winner;
}



const gameController = (playerSelection) =>
{

        if (computerWins <= 5 && playerWins <= 5)
        {
                matchCount ++;

                winnerMatch = playRound(playerSelection);

                console.log (`${typeof(winnerMatch)} ${winnerMatch}`);
                

                if (winnerMatch == "player")
                {
                        playerWins ++;

                        printResult.textContent = (`gana una ronda player`);
                }

                else if (winnerMatch == "computer")
                {
                        computerWins ++;
                        printResult.textContent = (`gana una ronda la skynet`);
                }

                else 
                {
                        printResult.textContent = (`Its a TIE, try again`);
                }

                
        }

        else
        {
                if (computerWins > playerWins)
                {
                        printResult.textContent = (`Computer Win`);
                }

                else 
                {
                        printResult.textContent = (`YOU WIN CONGRATS YOU ARE OFFICIALY A NERD`);
                }

                computerWins = 0;

                playerWins = 0;
        }

        
}


const btnRock = document.getElementById(`rock`);
const btnPaper = document.getElementById(`paper`);
const btnScisors = document.getElementById(`scisors`);

btnRock.addEventListener(`click`, () => { gameController(`rock`) });
btnPaper.addEventListener(`click`, () => { gameController(`paper`)});
btnScisors.addEventListener(`click`, () => { gameController(`scisors`)});



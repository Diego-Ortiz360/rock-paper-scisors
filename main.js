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


const playRound = () => 
{
        let playerSelection = prompt (`Please choose "rock", "paper" or "scisors`)

        playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();

        let winner = "";

        let rematch = false;

        let roundresult = null;

        console.log (`The player choose: ${playerSelection} and the computer choose: ${computerSelection} `);

        switch(playerSelection)
        {
                case "rock":
                {
                        if (computerSelection == "rock")
                        {
                                rematch = true;

                                roundresult = "Its a TIE!, lets play a rematch";

                                break;
                        }

                        else if (computerSelection == "paper")
                        {
                                roundresult = "You Lose! Paper beats Rock";

                                winner = "computer";

                                break;
                        }

                        else if (computerSelection == "scisors")
                        {
                                roundresult ="You win! Rock beats Scisors";

                                winner = "player";

                                break;
                        }


                        else 
                        {
                                roundresult = "Something went wrong";
                        }

                }

                case "paper":
                {
                        if (computerSelection == "paper")
                        {
                                rematch = true;

                                roundresult = "Its a TIE!, lets play a rematch";

                                break;
                        }

                        else if (computerSelection == "scisors")
                        {
                                roundresult = "You Lose! Scisors beats Paper";

                                winner = "computer";

                                break;
                        }

                        else if (computerSelection == "rock")
                        {
                                roundresult ="You win! Paper beats Rock";

                                winner = "player";

                                break;
                        }

                        else 
                        {
                                roundresult = "Something went wrong";
                        }

                }

                case "scisors":
                {
                        if (computerSelection == "scisors")
                        {
                                rematch = true;
        
                                roundresult = "Its a TIE!, lets play a rematch";
        
                                break;
                        }
        
                        else if (computerSelection == "rock")
                        {
                                roundresult = "You Lose! Rock beats Scisors";

                                winner = "computer";
        
                                break;
                        }
        
                        else if (computerSelection == "paper")
                        {
                                roundresult ="You win! Scisors beats Paper";

                                winner = "player";
        
                                break;
                        }


                        else 
                        {
                                roundresult = "Something went wrong";
                        }
                }

                 default: 
                {
                        roundresult = "Wrong entry, please enter 'rock', 'paper' or 'scisors' ";
                        rematch = true;
                        break;
                }
        }

        console.log (` The result of the round is: ${roundresult} ` );
        
        if (rematch == true)
        {
                rematch = false;

                rePlayRound();
        }

        else 
        {
                return winner;
        }
}


const rePlayRound = () =>
{
        let playerValue = prompt("Please write 'Paper', 'Rock' or 'Scisors'");
        let computerValue = getComputerChoice();
        
        playRound(playerValue.toLowerCase(),computerValue);
}


const playGame = (rounds) =>
{
        let computerwins = 0;
        let playerwins = 0;
        let winnerofthegame;
        let roundResult = 0;

        for (let i = 0; i <= rounds-1; i++) 
        {
                roundResult = playRound();
                
                if (roundResult == "computer")
                {
                        computerwins++;
                }

                else
                {
                        playerwins ++;
                }


        }

        if (computerwins > playerwins)
        {
                winnerofthegame = "computer";
        }

        else
        {
                winnerofthegame = "player";
        }

        console.log(`The results of the runds are:
                The computer win: ${computerwins}
                The player win: ${playerwins}
                The winner of the game is: ${winnerofthegame}`);
}




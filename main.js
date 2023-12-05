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

    console.log ("La computadora elige: " + choice);
};


const playRound = (playerSelection, computerSelection) => 
{

        playerMove = playerSelection.toLowerCase();

        let rematch = false;

        let roundresult = null;

        console.log (playerMove);

        switch(playerMove)
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

                                break;
                        }

                        else
                        {
                                roundresult ="You win! Rock beats Scisors";

                                break;
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

                                break;
                        }

                        else
                        {
                                roundresult ="You win! Paper beats Rock";

                                break;
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
        
                                break;
                        }
        
                        else
                        {
                                roundresult ="You win! Scisors beats Paper";
        
                                break;
                        }
                }

                 default: 
                {
                        roundresult = "Wrong entry, please enter 'rock', 'paper' or 'scisors' ";
                        rematch = true;
                        break;
                }
        }

        console.log (roundresult);

        if (rematch == true)
        {
                rematch = false;

                console.log (rematch);

                rePlayRound();
        }
}


const rePlayRound = () =>
{
        playerValue = prompt("Please write 'Paper', 'Rock' or 'Scisors'");
        computerValue = getComputerChoice();
        
        playRound(playerValue,computerValue);
}




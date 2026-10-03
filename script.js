function getComputerChoice() {
    const choice = Math.random();

    if (choice < 1/3) {
        return "rock"
         } else if (choice <2/3) {
            return "paper"
         } else {
            return "scissors"
         }
}


function getHumanChoice() {
   const choice = prompt("Rock, paper, or scissors?.")
   return choice.toLowerCase()

}


function playGame() {
   let humanScore = 0
   let computerScore = 0
   function playRound(humanChoice, computerChoice) {

   if (humanChoice === computerChoice) {
      console.log("It's a TIE!")
   } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose. Paper beats rock!");
      computerScore++;
   } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You WIN! Paper beats rock!");
      humanScore++;
   } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You Lose! Rock beats Scissors")
      computerScore++;
   } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You WIN! Rock beats scissors!")
      humanScore++;
   } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats paper!")
      computerScore++;
   } else if(humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You WIN! Scissors beats paper!")
      humanScore++;
   } else {
      console.log("Please, pick a valid option.")
   }
}

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
   console.log("Congratulations BEAST, you WON!!")
  } else if (humanScore == computerScore) {
   console.log("It is a TIE!!!")
  } else {
   console.log("Unfortunately you lost. Try harder nex time!")
  }
}



playGame();



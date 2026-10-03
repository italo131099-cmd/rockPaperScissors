let humanScore = 0
let computerScore = 0

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


function playRound(humanChoice, computerChoice) {

   if (humanChoice === computerChoice) {
      console.log("It's a TIE!")
   } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose. Paper beats rock!")
   } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You WIN! Paper beats rock!")
   } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You Lose! Rock beats Scissors")
   } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You WIN! Rock beats scissors!")
   } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats paper!")
   } else if(humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You WIN! Scsissors beats paper!")
   } else {
      console.log("Please, pick a valid option.")
   }
  


}

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




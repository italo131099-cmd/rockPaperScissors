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

console.log(getComputerChoice())

function humanChoice() {
   const choice = prompt("Choose between rock, paper, or scissors.")

   if (choice = "rock") {
      return rock
   } else if (choice = "paper") {
      return paper
   } else {
      return scissors
   }


}

console.log(humanChoice())
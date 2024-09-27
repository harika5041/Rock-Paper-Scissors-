const choices = ["rock", "paper", "scissors"];

document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        displayResults(userChoice, computerChoice);
    });
});

function displayResults(userChoice, computerChoice) {
    document.getElementById('user-choice').innerText = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
    
    const winner = determineWinner(userChoice, computerChoice);
    document.getElementById('winner').innerText = winner;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie..!";
    } 
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win ..!";
    } 
    return "Computer wins..!";
}

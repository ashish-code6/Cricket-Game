function getComputerChoice() {
    return Math.ceil(Math.random() * 3);
}
let ball = document.querySelector('#ball');
let bat = document.querySelector('#bat');
let wicket = document.querySelector('#wicket');
let display = document.querySelector('.display');
display.value = '';

function game() {
    bat.onclick = () => {
        let computerChoice = getComputerChoice();
        // console.log(computerChoice);  
        if (computerChoice === 1) {
            display.value = 'Game Tie😕';
        } else if (computerChoice === 2) {
            display.value = 'You won🙂';
        } else {
            display.value = 'You lost😠'   ;
        }
    };

    ball.onclick = () => {
        let computerChoice = getComputerChoice();
        // console.log(computerChoice);
        if (computerChoice === 1) {
            display.value = 'You lost😠';
        } else if (computerChoice === 2) {
            display.value = 'Game Tie😕'  ;
        } else {
            display.value = 'You won🙂';
        }
    };

    wicket.onclick = () => {
        let computerChoice = getComputerChoice();
        // console.log(computerChoice);  
        if (computerChoice === 1) {
            display.value = 'You won 🙂';
        } else if (computerChoice === 2) {
            display.value = 'You lost 😠';
        } else {
            display.value = 'Game Tie😕';
        }
    };
}

game();

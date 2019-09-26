import {
    printMessage,
    clearMessages
} from './functions.js';


const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let playerWins = parseInt(document.getElementById('playerWins').innerText);
let computerWins = parseInt(document.getElementById('computerWins').innerText);


function getMoveName(argMoveId) {
    // changed if statement to switch
    switch (argMoveId) {
        case 1:
            return 'kamień';
        case 2:
            return 'papier';
        case 3:
            return 'nożyce';
        default:
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
    }
}


const RESULTS = {
    'kamień': {
        papier: 0,
        'nożyce':1
    },
    papier: {
        'kamień': 1,
        'nożyce': 0
    },
    'nożyce': {
        papier: 1,
        'kamień': 0
    }
}


function displayResult(RESULTS, PlayerMove, ComputerMove) {
    printMessage('Gracz zagrywa: ' + PlayerMove + ', a Komputer: ' + ComputerMove)

    if (PlayerMove == ComputerMove) {
        printMessage('Remis!')
    } else if(RESULTS[PlayerMove][ComputerMove] == 1){
        printMessage('Wygrałeś!');
        playerWins++
        document.getElementById('playerWins').innerText = playerWins;
    } else {
        printMessage('Przegrałeś :(');
        computerWins++
        document.getElementById('computerWins').innerText = computerWins;
    }
}


function buttonClicked(argButtonName) {
    console.clear();
    clearMessages();

    // Changed let to const
    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(RESULTS, playerMove, computerMove);
}



buttonRock.addEventListener('click', () => buttonClicked('kamień'));

buttonPaper.addEventListener('click', () => buttonClicked('papier'));

buttonScissors.addEventListener('click', () => buttonClicked('nożyce'));
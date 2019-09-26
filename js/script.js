import {
    printMessage,
    clearMessages
} from './functions.js';

const RESULTS = [
    ['papier', 'kamień', 1],
    ['papier', 'nożyce', 0],
    ['kamień', 'papier', 0],
    ['kamień', 'nożyce', 1],
    ['nożyce', 'papier', 1],
    ['nożyce', 'kamień', 0]
];


const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let playerWins = parseInt(document.getElementById('playerWins').innerText);
console.log('wygrane gracza: ' + playerWins);

let computerWins = parseInt(document.getElementById('computerWins').innerText);

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    
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


function displayResult(RESULTS, PlayerMove, ComputerMove) {
    printMessage('Gracz zagrywa: ' + PlayerMove + ', a Komputer: ' + ComputerMove)

    if (PlayerMove == ComputerMove) {
        printMessage('Remis!')
    } else {
        for (let i = 0; i < RESULTS.length; i++) {
            console.log('odpalam pętlę i sprawdzam RESULT = ' + RESULTS[i]);
            if (PlayerMove == RESULTS[i][0] && ComputerMove == RESULTS[i][1]) {
                if (RESULTS[i][2] == 1) {
                    printMessage('Wygrałeś!');
                    playerWins++
                    document.getElementById('playerWins').innerText = playerWins;
                    break;
                } else {
                    printMessage('Przegrałeś :(');
                    computerWins++
                    document.getElementById('computerWins').innerText = computerWins;
                    break;
                }
            }
        }
    }

}


function buttonClicked(argButtonName) {
    clearMessages();

    // Changed let to const
    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(RESULTS, playerMove, computerMove);
}



buttonRock.addEventListener('click', () => buttonClicked('kamień'));

buttonPaper.addEventListener('click', () => buttonClicked('papier'));

buttonScissors.addEventListener('click', () => buttonClicked('nożyce'));
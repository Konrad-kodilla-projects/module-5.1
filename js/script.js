var argMoveId, PlayerMove, ComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonRock, buttonPaper, buttonScissors;

import { printMessage, clearMessages } from './functions.js';

const RESULTS = [
    ['papier', 'kamień', 1],
    ['papier', 'nożyce', 0],
    ['kamień', 'papier', 0],
    ['kamień', 'nożyce', 1],
    ['nożyce', 'papier', 1],
    ['nożyce', 'kamień', 0]
];


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

var playerWins = document.getElementById('playerWins').innerText;
playerWins = parseInt(playerWins);
console.log('wygrane gracza: ' + playerWins);

var computerWins = document.getElementById('computerWins').innerText;
computerWins = parseInt(computerWins)

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}


function displayResult(RESULTS, PlayerMove, ComputerMove) {
    printMessage('Gracz zagrywa: ' + PlayerMove + ', a Komputer: ' + ComputerMove)

    if (PlayerMove == ComputerMove) {
        printMessage('Remis!')
    } else {
        for (var i = 0; i < RESULTS.length; i++) {
            console.log('odpalam pętlę i sprawdzam RESULT = ' + RESULTS[i]);
            if (PlayerMove == RESULTS[i][0] && ComputerMove == RESULTS[i][1]) {
                if (RESULTS[i][2] == 1) {
                    printMessage('Wygrałeś!');
                    playerWins ++
                    document.getElementById('playerWins').innerText = playerWins;
                    break;
                } else {
                    printMessage('Przegrałeś :(');
                    computerWins ++
                    document.getElementById('computerWins').innerText = computerWins;
                    break;
                }
            }
        }
    }

}


function buttonClicked(argButtonName) {
    clearMessages();

    console.log(argButtonName + ' został kliknięty');

    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(RESULTS, playerMove, computerMove);
}


buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});

buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});


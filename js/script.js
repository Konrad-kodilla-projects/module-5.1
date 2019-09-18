var argMoveId, PlayerMove, ComputerMove, computerMove, playerMove, randomNumber, playerInput;

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

const RESULTS = [
    ['papier', 'kamień', 1],
    ['papier', 'nożyce', 0],
    ['kamień', 'papier', 0],
    ['kamień', 'nożyce', 1],
    ['nożyce', 'papier', 1],
    ['nożyce', 'kamień', 0]
];

function displayResult(RESULTS, PlayerMove, ComputerMove) {
    printMessage('Gracz zagrywa: ' + PlayerMove + ', a Komputer: ' + ComputerMove)

    if (PlayerMove == ComputerMove){
        printMessage('Remis!')
    } else {
        for (var i = 0; i < RESULTS.length; i++) {
            console.log('odpalam pętlę i sprawdzam RESULT = ' + RESULTS[i]);
            if (PlayerMove == RESULTS[i][0] && ComputerMove == RESULTS[i][1]) {
                if (RESULTS[i][2] == 1) {
                    printMessage('Wygrałeś!');
                    break;
                } else {
                    printMessage('Przegrałeś :(');
                    break;
                }
            }
        }
    }

}



playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(RESULTS, playerMove, computerMove);
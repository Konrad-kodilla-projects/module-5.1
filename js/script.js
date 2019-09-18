/* eslint-disable no-undef */

// Czemu deklaracja zmiennej i przypisanie wartości odbywa się w dwóch liniach?
var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! i wygrałem');


var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

// var randomNumber11_19 = Math.floor(Math.random() * 10 + 10);
// printMessage('Losowa liczba z zakresu 11-19 to: ' + randomNumber11_19);

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nożyce'
}
console.log('Komputer wyrzuca: ' + computerMove);

var playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier'
} else if (playerInput == '3') {
    playerMove = 'nożyce'
} else {
    playerMove = 'nieznany ruch';
}
console.log('Gracz wybiera: ' + playerMove);
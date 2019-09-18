/* eslint-disable no-undef */

// Czemu stworzenie zmiennej i przypisanie wartości odbywa się w dwóch liniach?
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
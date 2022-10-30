"use strict";

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*------------------
    FUNCTIONS
--------------------*/
/*------------------
    MAIN
--------------------*/
// 1. Chiedo all'utente se vuole scommettere su pari o dispari ed effettuo la validazione del dato inserito
let userChoice = prompt(`Scrivi "pari" o "dispari"`);
while( !(userChoice === "pari" || userChoice === "dispari") ) {
    alert(`Devi scrivere "pari" oppure "dispari"!`);
    userChoice = prompt(`Scrivi "pari" o "dispari"`);
}
console.log(`La scelta dell'utente è: "${userChoice}"`);

// 2. Chiedo all'utente di inserire un numero tra 1 e 5 ed effettuo la validazione del dato inserito
let userNumber = Number( prompt("Inserisci un numero tra 1 e 5") );
while( isNaN(userNumber) || !(userNumber >= 1 && userNumber < 6)) {
    alert(`Attenzione! Devi inserire un numero e il numero deve essere compreso tra 1 e 5!`);
    userNumber = Number( prompt("Inserisci un numero tra 1 e 5") );
}
console.log(`Il numero scelto dall'utente è: ${userNumber}`);

// 3. Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const cpuNumber = getRndInteger(1, 5);
console.log(`Il numero generato per la CPU è: ${cpuNumber}`);

// 4. Sommo il numero scelto dall'utente e quello generato per la CPU
const sum = userNumber + cpuNumber;
console.log(`La somma dei due numeri è: ${sum}`);

// 5. Definisco se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven() {
    if( sum % 2 === 0 ) {
        console.log(`Il risultato della somma è: "pari"`);
        return true;
    }
    console.log(`Il risultato della somma è "dispari"`);
    return false;
}

// 6. Dichiaro il vincitore
if( (isEven() === true && userChoice === "pari")  || (isEven() === false && userChoice === "dispari") ) {
    alert("Complimenti, hai VINTO contro la CPU!");
} else {
    alert("Mi dispiace, hai PERSO contro la CPU!");
}
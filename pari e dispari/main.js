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

// 3. Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione)

// 4. Sommo il numero scelto dall'utente e quello generato per la CPU

// 5. Definisco se la somma dei due numeri è pari o dispari (usando una funzione)

// 6. Dichiaro il vincitore

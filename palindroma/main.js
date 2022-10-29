"use strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*------------------
    FUNCTIONS
--------------------*/
/*------------------
    MAIN
--------------------*/
const word = prompt("Inserisci una parola");
console.log(word);
let wordSpelling;
let wordSpellingReverse;

function palindromes(word) {

    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
        wordSpelling = word[i];
    }
    for (let i = word.length; i >= 0; i--) {
        console.log(word[i]);
        wordSpellingReverse = word[i];
    }
    if( wordSpelling === wordSpellingReverse ) {
        return true;
    }
    return false;
}

if( palindromes(word) === true) {
    console.log(`La parola "${word}" è palindroma`);
    alert(`La parola "${word}" è palindroma!`);
} else {
    console.log(`La parola "${word}" NON è palindroma`);
    alert(`La parola "${word}" NON è palindroma!`);
}

// Test
// console.log('Inserisco la parola palindroma e mi aspetto true', palindromes(word));
// console.log('Inserisco la parola NON palindroma e mi aspetto false', palindromes(word));
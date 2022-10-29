"use strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*------------------
    FUNCTIONS
--------------------*/
function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
        wordSpelling = word[i];
    }
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
        wordSpellingReverse = word[i];
    }
    if( wordSpelling === wordSpellingReverse ) {
        return true;
    }
    return false;
}
/*------------------
    MAIN
--------------------*/
const word = prompt("Inserisci una parola");
console.log(word);
let wordSpelling;
let wordSpellingReverse;

if( isPalindrome(word) === true) {
    console.log(`La parola "${word}" è palindroma`);
    alert(`La parola "${word}" è palindroma!`);
} else {
    console.log(`La parola "${word}" NON è palindroma`);
    alert(`La parola "${word}" NON è palindroma!`);
}
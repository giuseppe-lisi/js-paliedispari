/*
Per determinare se una parola è palindroma, in JS, 
non esiste un metodo che sia in grado di fare tutto 
il lavoro al posto nostro. Tuttavia, possiamo utilizzare 
due escamotage per ottenere il risultato voluto:

1 - Suddividiamo la stringa in modo tale che
    ogni carattere diventi un elemento di un array.
    Reversiamo quindi l'array e facciamo poi il join degli
    elementi per farlo tornare una stringa

2 - Sfruttiamo un for loop che "legge" uno ad uno i
    caratteri della stringa partendo dall'ultimo
    e li salva progressivamente all'interno di una nuova stringa. 
    Controlliamo quindi se la nuova stringa, invertita, 
    è uguale a quella di partenza
*/

// Metodo 1

// chiedo all'utente di inserire una parola
let userWord = prompt("Inserisci una parola, io controllerò se è palindroma");

// prende una stringa e restituisce vero se è palindroma altrimenti falso
function isPalindromeWithArray(str) {
    let strReversed = str.split("").reverse().join("");
    if (strReversed == str) {
        return true;
    }
    return false;
}

console.log(isPalindromeWithArray(userWord));

// prende una stringa e restituisce vero se è palindroma altrimenti falso
function isPalindromeWithFor(str) {
    let strReversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    if (strReversed == str) {
        return true;
    }
    return false;
}

console.log(isPalindromeWithFor(userWord));


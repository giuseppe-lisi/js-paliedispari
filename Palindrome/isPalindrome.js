/*
Per determinare se una parola è palindroma, in JS, 
non esiste un metodo che sia in grado di fare tutto 
il lavoro al posto nostro. Tuttavia, possiamo utilizzare 
dueescamotage per ottenere il risultato voluto:

1 - Suddividiamo la stringa in modo tale che
    ogni carattere diventi un elemento di un array.
    Reversiamo quindi l'array e facciamo poi il join degli
    elementi per farlo tornare una stringa

2 - Sfruttiamo un for loop che "legge" uno ad uno i
    caratteri della stringa e li salva progressivamente
    all'interno di una nuova stringa. 
    Controlliamo quindi se la nuova stringa è uguale a
    quella di partenza
*/

// Metodo 1

// chiedo all'utente di inserire una parola
let userWord = prompt("Inserisci una parola, io controllerò se è palindroma");

function isPalindrome(word) {
    let wordReversed = word.split("").reverse().join("");
    if (wordReversed == word) {
        return true;
    }
    return false;
}

let parolaRitornata = isPalindrome(userWord);
console.log(parolaRitornata);



// genera un numero intero casuale tra 1 e 5 compreso
function getRandomInRangeInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = getRandomInRangeInclusive(1,5);

// utente inserisce scelta e numero
let userChoice = prompt("Scegli tra pari e dispari")
let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"))

// determina se la somma dei due numeri è pari o dispari
function isSumEvenOrOdd(num1, num2) {
    let sum = "";
    if ((num1 + num2) % 2 === 0) {
        return sum = "pari";
    }
    return sum = "dispari";
}

let risultato = isSumEvenOrOdd(computerNumber, userNumber);

// determina se ha vinto l'utente o la CPU
if (risultato == userChoice) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!");
}
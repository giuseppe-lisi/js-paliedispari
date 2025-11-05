// genera un numero intero casuale tra 1 e 5 compreso
function getRandomInRangeInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = getRandomInRangeInclusive(1,5);
let userChoice = "";
let userNumber;
// utente inserisce scelta tra pari o dispari e numero
while (userChoice != "pari" && userChoice != "dispari") {
    userChoice = prompt("Scegli tra 'pari' o 'dispari'").toLowerCase();
}

while (!(userNumber >= 1 && userNumber <= 5) || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"))
}

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
    alert(`La CPU ha scelto ${computerNumber}. Hai vinto!`);
} else {
    alert(`La CPU ha scelto ${computerNumber}. Hai perso!`);
}
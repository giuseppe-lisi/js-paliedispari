// prende una stringa e restituisce vero se è palindroma altrimenti falso
function isPalindromeWithArray(str) {
    let strReversed = str.split("").reverse().join("");
    if (strReversed == str) {
        return document.getElementById('output1').value = "true";
    }
    return document.getElementById('output1').value = "false";
}



// prende una stringa e restituisce vero se è palindroma altrimenti falso
function isPalindromeWithFor(str) {
    let strReversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    if (strReversed == str) {
        return document.getElementById('output2').value = "true";;
    }
    return document.getElementById('output2').value = "false";;
}
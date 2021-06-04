
// js-snack-6
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente attraverso un prompt. 

var numeriUtenti = parseInt(prompt("inserisci numero"));
for (var i = 1; i <= numeriUtenti; i++){
    console.log(Math.pow(i, 3));
    document.getElementById("number").innerHTML = Math.pow(i, 3);
}

// js-snack-10
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// esercizio for

var somma = 0;
for (var i = 1; i <= 5; i++) {
    var numeriUsers = parseInt(prompt("Inserisci un numero"));
    somma += numeriUsers;
}
console.log("somma for: " + somma);
document.getElementById("for").innerHTML = "somma for: " + somma;

// esercizio while

var somma2 = 0;
var a = 1;
while (a <= 5) {
    var numeriUsers2 = parseInt(prompt("PARTE DUE: Inserisci un numero"));
    somma2 += numeriUsers2;
    a++;
}
console.log("somma while: " + somma);
document.getElementById("while").innerHTML = "somma while: " + somma;




// js-snack-3
// il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var risultato = 0;

for (var i = 1; i <= 10; i++) {
    var numeriUtente = parseInt(prompt("dimmi un numero"));
    risultato += numeriUtente;
}

document.getElementById("prova").innerHTML = risultato;

// js-snack-8
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
// (bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

var numeriUtente = prompt("Inserisci un numero di quattro cifre");
var analisiUtente = numeriUtente.length;
if (analisiUtente !== 4) {
    alert("IL NUMERO DEVE ESSERE DI QUATTRO CIFRE");
} else if (isNaN(numeriUtente)) {
    alert("IL VALORE INSERITO DEVE ESEERE UN NUMERO");
} else {
    var somma = 0;
    for (var x = 0; x < analisiUtente; x++) {
        somma += parseInt(numeriUtente[x]);
    }
}
console.log(somma);
document.getElementById("utente").innerHTML = somma;

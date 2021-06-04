
// js-snack-5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

var box = [];

for (var i = 1; i <= 6; i++) {
    var numeriUtente = parseInt(prompt("dimmi un numero"));
    if (numeriUtente % 2 !== 0) {
        box.push(numeriUtente);
    }
}

document.getElementById("prova").innerHTML = box;


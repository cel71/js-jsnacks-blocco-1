
// js-snack-9
// Calcola la somma e la media dei primi 10 numeri.

var numero = 10;
var somma = 0;
for (var i = 1; i <= numero; i++) {
    var risultato = somma += i;
}
console.log(risultato);
var media = risultato / numero;
console.log(media);
document.getElementById("number").innerHTML = risultato + "<br/>" + media;


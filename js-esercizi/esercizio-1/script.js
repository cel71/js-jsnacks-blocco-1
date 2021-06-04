
// js-snack-1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var numeroUno = prompt("inserisci primo numero");
var numeroDue = prompt("inserici numero due");
if (parseInt(numeroUno) > parseInt(numeroDue)) {
    document.getElementById("prova").innerHTML = "numero uno è maggiore";

} else if (parseInt(numeroUno) === parseInt(numeroDue)) {
    document.getElementById("prova").innerHTML = "il numero è uguale";
    
} else {
    document.getElementById("prova").innerHTML = "numero due è maggiore"; 
} 

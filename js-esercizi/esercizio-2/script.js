
// js-snack-2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var parolaUno = prompt("inserisci prima parola");
var parolaDue = prompt("inserisci seconda parola");
var output = document.getElementById("prova");
if (parolaUno.length < parolaDue.length) {
    document.getElementById("prova").innerHTML = "la parola uno è più corta della seconda: " + parolaUno;  
} else if (parolaUno.length === parolaDue.length) {
    output.innerHTML = "sono uguali";
} else {
    output.innerHTML = "la parola uno è più lunga della seconda: " + parolaUno;
}

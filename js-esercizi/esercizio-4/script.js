
// js-snack-4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeInvitato = prompt("dimmi il tuo nome");
var nomiInvitati = ["Francesco", "Lara", "Simone", "Mattia"];
var list = false;
for (var i = 0; i < nomiInvitati.length; i++) {
    if (nomeInvitato === nomiInvitati[i])
    list = true;
}

if (list) {
    document.getElementById("prova").innerHTML = "il tuo nome è presente";
} else {
    document.getElementById("prova").innerHTML = "il tuo nome non è presente";
}


// js-snack-12
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
// Gatsby vuole generare una falsa lista di 3 invitati.

var nomiUtenti = ["Francesco", "Massimo", "Lara", "Francesca", "Giovanna", "Renato"];
var cognomiUtenti = ["Rossi", "Bianchi", "Neri", "Gialli", "Ferrari", "Bonato"];
var listaFalsa = [];
while (listaFalsa.length < 3) {
    var nomi = nomiUtenti[Math.floor(Math.random() * nomiUtenti.length)];
    var cognomi = cognomiUtenti[Math.floor(Math.random() * cognomiUtenti.length)];
    var utenti = nomi + " " + cognomi;
    if (!listaFalsa.includes(utenti)) {
        document.getElementById("invitati").innerHTML += "<li>" + utenti + "</li>";
        listaFalsa.push(utenti);
    }
}




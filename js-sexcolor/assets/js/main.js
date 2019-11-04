/* Il software deve chiedere all’utente il suo nome e 
il sesso con due prompt diversi.
Sulla pagina html deve apparire 
“Ciao < nome >“, il colore del nome deve essere 
azzurro o rosa a seconda del sesso inserito. */

var inputName = prompt('Inserisci il tuo nome');
var inputSex = prompt('Inserisci il tuo sesso, "m" o "f"');

var title = document.getElementById('title');
title.innerHTML = "Ciao " + inputName;

if (inputSex === "m") {
  title.className = title.classList + " lightblue";
} else if (inputSex === "f") {
  title.className = title.classList + " pink";
}
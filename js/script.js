// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

     
// una volta che l'utente ha inserito i numeri creo un alert che dice quanti e quali numeri l'utente ha indovinato

// Stampo in pagina 5 numeri casuali da 1 a 100
let randomNumbers = [];
for (let i = 0; i <= 4; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 100);
}
document.getElementById("boxNumbers").innerHTML = randomNumbers;

// creo timer di 5 secondi
setTimeout(hideNumbers, 5000);
function hideNumbers() {

    document.getElementById("boxNumbers").innerHTML = "";
}

// allo scadere fa sparire i numeri
setTimeout(chiediNumeri, 5500);
function chiediNumeri() {
    // finito il tempo creo 5 prompt che chiedono i numeri
    let arrayUtente = [];
    for (let i = 0; i <= 4; i++) {
        let numeriUtente = parseInt(prompt('Inserisci un numero alla volta'));
        console.log(numeriUtente);
        arrayUtente[i] = (numeriUtente);
    }
    console.log(arrayUtente);

    // una volta che l'utente ha inserito i numeri creo un alert che dice quanti e quali numeri l'utente ha indovinato
    let stato = true;
    for (let i = 0; i <= 4 && stato == true; i++) {

        if (randomNumbers[i] === arrayUtente[i]) {
            stato = true;
        }
        else {
            stato = false;
        }
    }

    if (stato == true) {
        alert("Hai vinto");
    }else {
        alert("Hai perso");
    }
}
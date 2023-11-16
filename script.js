// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito,  infine scrivi sulla pagina nomecognomecolorepreferito23.

// Chiedo all'utente il suo nome

const userName = prompt("Quale è il tuo nome?");
console.log("il tuo Username è :" ,userName)

//Chiedo all'utente il suo cognome

const userSurname = prompt("Quale è il tuo cognome?");
console.log("il tuo Usersurname è :" ,userSurname)

//Chiedo all'utente il suo colore preferito

const userColor = prompt("Quale è il tuo colore preferito?");
console.log("il tuo userColor è :" ,userColor)

//Output dei dati raccolti

let datiUser = `${userName}${userSurname}${userColor}23`;

console.log(datiUser);
document.getElementById("mio_id").innerHTML = datiUser
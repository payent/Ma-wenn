const jourElement = document.getElementById("jour");
const messageElement = document.getElementById("message");


// Pour le moment, on reste en mode test : Jour 1
let jourActuel = 1;


// Cherche le message correspondant
let messageDuJour = messages.find(
    message => message.jour === jourActuel
);


// Affiche le message

if (messageDuJour) {

    jourElement.innerHTML =
    "Jour " + messageDuJour.jour + " ❤️";

    messageElement.innerHTML =
    messageDuJour.texte;

}


// Animation des cœurs

function creerCoeur() {

    const coeur = document.createElement("div");

    coeur.className = "heart";

    coeur.innerHTML = "❤️";


    coeur.style.left =
    Math.random() * 100 + "%";


    coeur.style.animationDuration =
    (4 + Math.random() * 4) + "s";


    document.body.appendChild(coeur);


    setTimeout(function() {

        coeur.remove();

    }, 7000);

}


setInterval(creerCoeur, 900);
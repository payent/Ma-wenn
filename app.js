console.log("OneSignal =", window.OneSignal);
const jourElement = document.getElementById("jour");
const messageElement = document.getElementById("message");


// Date de première ouverture

let dateDepart = localStorage.getItem("dateDepart");


if (!dateDepart) {

dateDepart = new Date().toISOString();

    localStorage.setItem("dateDepart", dateDepart);

}


// Calcul du nombre de jours

const aujourdHui = new Date();
const debut = new Date(dateDepart);


const difference = aujourdHui - debut;


let jourActuel =
Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;


// Maximum 365 jours

if (jourActuel > 365) {
    jourActuel = 365;
}


// Cherche le message du jour

const messageDuJour = messages.find(
    message => message.jour === jourActuel
);


// Affichage

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


    setTimeout(() => {

        coeur.remove();

    }, 7000);

}


setInterval(creerCoeur, 900);

const boutonNotifications = document.getElementById("activerNotifications");

if (boutonNotifications) {

    boutonNotifications.addEventListener("click", async () => {

        alert("Bouton détecté ❤️");

    });

}
const jourElement = document.getElementById("jour");
const messageElement = document.getElementById("message");

// Date officielle de début du cadeau
const dateDepart = new Date("2026-08-06T09:30:00+02:00");

const aujourdHui = new Date();
const difference = aujourdHui - dateDepart;

let jourActuel = Math.floor(
    difference / (1000 * 60 * 60 * 24)
) + 1;

// Avant le lancement
if (jourActuel < 1) {
    jourActuel = 1;
}

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
        "Jour " + messageDuJour.jour + " sur 365 ❤️";

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

        try {

            await OneSignal.User.PushSubscription.optIn();

            alert("Tes petits mots sont activés ❤️");

        } catch (erreur) {

            console.log("Erreur notification :", erreur);

        }

    });

}
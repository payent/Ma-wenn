const dateRencontre = new Date(2026, 6, 7);

function verifierAnniversaire() {
    const aujourdHui = new Date();

if (aujourdHui.getDate() !== 7) {
    return;
}

let moisDiff =
    (aujourdHui.getFullYear() - dateRencontre.getFullYear()) * 12 +
    (aujourdHui.getMonth() - dateRencontre.getMonth());
   console.log("moisDiff =", moisDiff);
 let message = "";
    if (moisDiff === 1) {
        message = "❤️ 1 mois ensemble ❤️<br><br>Merci pour ce premier mois à tes côtés. Je t’aime.";
    }else if (moisDiff === 2) {
    message = "❤️ 2 mois ensemble ❤️<br><br>Deux mois déjà à partager des sourires et des souvenirs. Je t’aime.";
}
else if (moisDiff === 3) {
    message = "❤️ 3 mois ensemble ❤️<br><br>Trois mois à construire de beaux moments ensemble. Je t’aime.";
}
else if (moisDiff === 4) {
    message = "❤️ 4 mois ensemble ❤️<br><br>Chaque mois avec toi est un petit bonheur de plus.";
}
else if (moisDiff === 5) {
    message = "❤️ 5 mois ensemble ❤️<br><br>Cinq mois de sourires, de pensées et de beaux souvenirs.";
}
else if (moisDiff === 6) {
    message = "❤️ 6 mois ensemble ❤️<br><br>Un demi-année déjà, et toujours autant de bonheur.";
}
else if (moisDiff === 7) {
    message = "❤️ 7 mois ensemble ❤️<br><br>Sept mois à écrire notre petite histoire.";
}
else if (moisDiff === 8) {
    message = "❤️ 8 mois ensemble ❤️<br><br>Chaque jour rend cette aventure encore plus belle.";
}
else if (moisDiff === 9) {
    message = "❤️ 9 mois ensemble ❤️<br><br>Merci pour tous ces moments et tous ces sourires.";
}
else if (moisDiff === 10) {
    message = "❤️ 10 mois ensemble ❤️<br><br>Encore un mois de plus à partager cette belle histoire.";
}
else if (moisDiff === 11) {
    message = "❤️ 11 mois ensemble ❤️<br><br>Plus qu’un mois avant notre première année.";
}

 if (moisDiff === 12) {
    message = "❤️ Joyeux 1 an ❤️<br><br>Une année entière de souvenirs, de sourires et de bonheur. Je t’aime ❤️";

    document.body.classList.add("un-an");

    lancerFleurs();

 }


    if (message !== "") {
        const zoneMessage = document.getElementById("message");

if (zoneMessage) {
    zoneMessage.innerHTML = message;
}

const zoneJour = document.getElementById("jour");

if (zoneJour) {
    zoneJour.innerHTML = "❤️ Anniversaire ❤️";
}    }
}

verifierAnniversaire();function lancerFleurs() {
    for (let i = 0; i < 20; i++) {
        const fleur = document.createElement("div");

        fleur.className = "fleur";
        fleur.innerHTML = "🌸";

        fleur.style.left = Math.random() * 100 + "vw";
        fleur.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(fleur);
    }
}
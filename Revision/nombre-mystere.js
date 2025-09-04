// Nombre a deviner
const VALEUR_MAX = 100;
let end = false;


document.getElementById('limite').textContent = VALEUR_MAX;

let nombreMystere = Math.floor(Math.random() * VALEUR_MAX) + 1;
console.log(nombreMystere);
let essais = 0;

document.getElementById('guess').addEventListener("keypress", function (event) {
    if (verifier.textContent != "Recommencer") {
        if (event.key === "Enter") {
            document.getElementById('verifier').click();
        }
    }
});


document.getElementById('verifier').addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    const resultat = document.getElementById('resultat');
    const tentatives = document.getElementById('tentatives');
    essais++;

    if (end === true) {
        essais--;

        nombreMystere = Math.floor(Math.random() * VALEUR_MAX) + 1;
        end = false;
        verifier.textContent = "Vérifier";
        resultat.textContent = "";
        resultat.className = "base";
        essais = 0;
        console.log(nombreMystere);
    }
   
    else if ( guess == "" || isNaN(guess) || guess < 0 || guess > 100) {
        resultat.textContent = "Pas un nombre valide"
        resultat.className = "invalide"
        essais--;
    }
    else if (guess < nombreMystere) {
        resultat.textContent = "Trop bas!";
        resultat.className = "tropHaut";
    } else if (guess > nombreMystere) {
        resultat.textContent = "Trop haut!";
        resultat.className = "tropBas";

    } 
    else if (essais > 9 && guess != nombreMystere) {
        resultat.textContent = "GAME OVER, 10 TENTATIVES";
        verifier.textContent = "Recommencer";
        resultat.className = "gameOver";
        end = true;

    } else {
        resultat.textContent = "Bravo! Vous avez trouvé le nombre mystère.";
        resultat.className = "succes";
        verifier.textContent = "Recommencer"
        end = true;
    }
    tentatives.textContent = essais + (essais === 1 ? " tentative" : " tentatives");
});
// TODO :
// - Valider l'essai entre 1 et 100. Message d'erreur sinon et n'augmente pas les tentatives                            - fait
// - Lorsque le nombre est trouvé:
// Enter ne fait rien, le bouton indique "rejouer", si bouton cliquer, recommence un nouveau jeu
// - Maximum 10 tentatives -) bouton devien "Rejouer", Résultat devient "Nombre tentatives maximum atteint"

// le boutton de changement de couleur
var btnBack = document.getElementById("buttonBack")

var btnFore = document.getElementById("buttonFore")
const MAX_COULEUR = 256;

// retourne un entier aléatoire entre 0 et 255
function randomCouleur(){
return Math.floor(Math.random()*MAX_COULEUR)
}

//retourne une couleur aléatoire
function randomRGB(){
let r = randomCouleur();
let g = randomCouleur();
let b = randomCouleur();
//return `rgb(${r},${g},${b})`;
return "rgb(" +r +"," + g + "," + b + ")";
}
// Callback sur clic pour changer la couleur de fond
btnBack.onclick = function() {
    let rndCol = randomRGB();
    document.querySelector(".contenu").style.backgroundColor=rndCol;
    console.log("couleur found: " + rndCol);
}
btnFore.onclick = function() {
    let rndCol = randomRGB();
    document.querySelector(".contenu").style.color=rndCol;
    console.log("couleur found: " + rndCol);
}





console.log("revision.js bien chargé")
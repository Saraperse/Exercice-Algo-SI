var readline = require("readline-sync");
// var nom = " Toto";
// var sexe = false;
// var age = 44;
var msg = "";

//
saisie = readline.question("quel est votre nom ?");
saisie1 = readline.question("quel est votre sexe ?");
saisie2 = readline.questionInt("quel est votre age ?");


if (sexe) {
    msg = msg + "Vous êtes un homme ";

    if (age >= 18) {
    msg = msg + "majeur";
    } else {
    msg = msg + " mineur";
    }
} else  {
    msg = msg + "Vous êtes une femme ";
    if (age >= 18) {
    msg = msg + "majeure";
    } else {
    msg = msg + " mineure";
    }
}
console.log(msg)
;

var x = 0;
var y = 1;
var random = Math.floor(Math.random(0,1)*2);
console.log(random);
if(random === 10) {
    console.log(random + " : pile");
} else { 
    console.log(random + " : Face");
}


// formule pour générer un chiffre aléatoire 
//Math.floor(Math.random(x,y)* (max-min +1) + min)
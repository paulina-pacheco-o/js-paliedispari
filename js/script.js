//PALINDROMA
//const word = prompt(`Inserisci una parola`);

//function paliWord(parola) {
//const parolaInvertita = parola.split("").reverse().join("")
//const result = parola === parolaInvertita
//return result
//}

//const check = paliWord(word)
//if (check) {
//console.log(`Questa parola è palindroma`)
//}
//else {
//console.log(`Questa parola non è palindroma`)
//}


//PARI E DISPARI
const evenOrOdd = prompt(`Scegli pari o dispari`);
const userNumber = parseInt(prompt(`Insersci un numero da 1 a 5`));

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function sum(userNumber, generateRandomNumber) {
  return userNumber + generateRandomNumber
}

sum()
console.log(sum(userNumber, generateRandomNumber));

console.log(generateRandomNumber(1, 5));

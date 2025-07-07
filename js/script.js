//PALINDROMA
const word = prompt(`Inserisci una parola`);

function paliWord() {
  if (word === word.reverse()) {
    console.log(`Questa è una parola palindroma`)
  }
  else {
    console.log(`Questa non è una parola palindroma`)
  }
}

paliWord();
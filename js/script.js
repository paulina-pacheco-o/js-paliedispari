//PALINDROMA
const word = prompt(`Inserisci una parola`);

function paliWord(parola) {
  const parolaInvertita = parola.split("").reverse().join("")
  if (parola === parolaInvertita) {
    return true
  }
  else {
    return false
  }
}

const check = paliWord(word)
if (check) {
  console.log(`Questa parola è palindroma`)
}
else {
  console.log(`Questa parola non è palindroma`)
}
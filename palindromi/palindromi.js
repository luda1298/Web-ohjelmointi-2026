function onPalindromi(sana) {
  let pituus = sana.length;

  for (let i = 0; i < pituus / 2; i++) {
    if (sana[i] !== sana[pituus - 1 - i]) {
      return false;
    }
  }
  return true;
}

const readline = require("readline-sync");
let sana = readline.question("Anna sana: ");

if (onPalindromi(sana)) {
  console.log("Sana on palindromi");
} else {
  console.log("Sana ei ole palindromi");
}

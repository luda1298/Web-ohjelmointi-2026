// puhelinluettelo.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Puhelinluettelo: taulukko objekteja { name, phone }
const book = [];

// Kysyy käyttäjältä syötteen ja palauttaa sen Promise-muodossa (async/await)
function ask(q, cb) {
  rl.question(q, (a) => cb(a.trim()));
}

// === HAKUFUNKTIO (tehtävän mukaan) ===
// Parametrit: taulukko, nimi
// Palauttaa: puhelinnumero tai null
function findPhone(book, name) {
  name = name.toLowerCase();
  const person = book.find((x) => x.name.toLowerCase() === name);
  return person ? person.phone : null;
}

// Lisää uusi henkilö
function addPerson() {
  ask("Nimi: ", (name) => {
    ask("Puhelinnumero: ", (phone) => {
      if (!name || !phone) {
        console.log("Nimi ja puhelinnumero ei saa olla tyhjät.\n");
        return menu();
      }
      book.push({ name, phone });
      console.log(`Lisätty: ${name} — ${phone}\n`);
      menu();
    });
  });
}

// Hae numero nimen perusteella
function searchPerson() {
  ask("Anna nimi, jonka numero haetaan: ", (name) => {
    const phone = findPhone(book, name);
    console.log(phone ? `Puhelinnumero: ${phone}\n` : "Ei löytynyt.\n");
    menu();
  });
}

// Tulosta kaikki
function printAll() {
  if (book.length === 0) {
    console.log("Puhelinluettelo on tyhjä.\n");
  } else {
    console.log("\n--- Puhelinluettelo ---");
    book.forEach((p, i) => console.log(`${i + 1}. ${p.name} - ${p.phone}`));
    console.log("");
  }
  menu();
}

// Päävalikko
function menu() {
  console.log("Valitse toiminto:");
  console.log("1) Lisää henkilö");
  console.log("2) Hae puhelinnumero nimen perusteella");
  console.log("3) Tulosta puhelinluettelo");
  console.log("0) Lopeta");

  ask("> ", (choice) => {
    if (choice === "1") addPerson();
    else if (choice === "2") searchPerson();
    else if (choice === "3") printAll();
    else if (choice === "0") rl.close();
    else {
      console.log("Tuntematon valinta.\n");
      menu();
    }
  });
}

menu();

// Prijs van het product (hard gecodeerd)
const prijsProduct = 50;

// Vraag aan de gebruiker hoeveel geld hij/zij heeft
const gebruikerGeld = prompt("Hoeveel geld heb je?");

// Controleer of het genoeg is
if (gebruikerGeld >= prijsProduct) {
  alert("Je hebt genoeg geld om het product te kopen!");
} else {
  alert("Helaas, je hebt niet genoeg geld om dit product te kopen.");
}

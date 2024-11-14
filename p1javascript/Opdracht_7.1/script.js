// Variabelen voor budget en productprijs
const budget = 100;
const product = 60;

// Selecteer het HTML-element voor het bericht
const messageElement = document.getElementById('message');

// Controleer of het budget voldoende is voor het product
if (budget >= product) {
    // Genoeg budget, toon het bericht en kleur groen
    messageElement.textContent = "U heeft genoeg geld!";
    messageElement.style.color = "green";
} else {
    // Onvoldoende budget, toon het bericht en kleur rood
    messageElement.textContent = "Helaas, te weinig geld";
    messageElement.style.color = "red";
}

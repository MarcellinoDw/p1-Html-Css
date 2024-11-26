// Variabelen voor de twee divs
const closedFace = document.querySelector("#closed");
const openFace = document.querySelector("#open");

// Functie om te wisselen naar open gezicht
function toggleToOpen() {
  if (closedFace.classList.contains("active")) {
    closedFace.classList.remove("active");
    openFace.classList.add("active");
  }
}

// Functie om te wisselen naar gesloten gezicht
function toggleToClosed() {
  if (openFace.classList.contains("active")) {
    openFace.classList.remove("active");
    closedFace.classList.add("active");
  }
}

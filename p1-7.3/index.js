let getal = 0; // Startwaarde van het getal

function verhoogGetal() {
  getal++; // Verhoog het getal met 1
  if (getal > 10) {
    getal = 0; // Reset het getal naar 0 als het groter is dan 10
  }
  document.getElementById("counter").textContent = getal; // Toon het getal op het scherm
}

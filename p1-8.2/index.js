function validatie(getal1, getal2) {
    if (getal1 > 0 && getal2 > 0) {
      return true; // Beide getallen zijn geldig
    } else {
      toonResultaat("Het getal is te laag"); // Foutmelding weergeven
      return false;
    }
  }
  
  function Multiply() {
    const getal1 = parseFloat(document.getElementById("getal1").value);
    const getal2 = parseFloat(document.getElementById("getal2").value);
    if (validatie(getal1, getal2)) {
      const resultaat = getal1 * getal2;
      toonResultaat(resultaat);
    }
  }
  
  function Divide() {
    const getal1 = parseFloat(document.getElementById("getal1").value);
    const getal2 = parseFloat(document.getElementById("getal2").value);
    if (validatie(getal1, getal2)) {
      if (getal2 === 0) {
        toonResultaat("Kan niet delen door 0!");
        return;
      }
      const resultaat = getal1 / getal2;
      toonResultaat(resultaat);
    }
  }
  
  function Sum() {
    const getal1 = parseFloat(document.getElementById("getal1").value);
    const getal2 = parseFloat(document.getElementById("getal2").value);
    if (validatie(getal1, getal2)) {
      const resultaat = getal1 + getal2;
      toonResultaat(resultaat);
    }
  }
  
  function Minus() {
    const getal1 = parseFloat(document.getElementById("getal1").value);
    const getal2 = parseFloat(document.getElementById("getal2").value);
    if (validatie(getal1, getal2)) {
      const resultaat = getal1 - getal2;
      toonResultaat(resultaat);
    }
  }
  
  function toonResultaat(waarde) {
    document.getElementById("resultaat").textContent = "Resultaat: " + waarde;
  }
  
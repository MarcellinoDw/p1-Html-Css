function kleur_aanpassen() {
    // Selecteer het h1 element
    const h1Element = document.getElementById('hoofdtekst');
    
    // Verander de kleur
    h1Element.style.color = 'blue';
    
    // Verander de tekst
    h1Element.textContent = 'Inhoud aangepast!';
}

// Roep de functie op om de aanpassingen door te voeren
kleur_aanpassen();

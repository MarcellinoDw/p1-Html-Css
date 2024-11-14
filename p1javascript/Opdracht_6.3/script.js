function kleur_aanpassen() {
    // Selecteer het h1 element
    const h1Element = document.getElementById('hoofdtekst');
    
    // Controleer de huidige tekst en wissel tussen de originele en aangepaste versie
    if (h1Element.textContent === 'Originele Inhoud') {
        h1Element.style.color = 'blue';
        h1Element.textContent = 'Inhoud aangepast!';
    } else {
        h1Element.style.color = 'black';
        h1Element.textContent = 'Originele Inhoud';
    }
}

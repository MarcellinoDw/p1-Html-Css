/* Stijl voor de container */
.container {
    display: flex;                /* Gebruik Flexbox */
    justify-content: space-around; /* Ruimte gelijk verdelen rond de blokken */
    max-width: 1200px;            /* Maximaal 1200px breedte */
    margin: 0 auto;               /* Centreer de container */
}

/* Stijl voor de blokken */
.box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
}

/* Specifieke kleuren voor de blokken */
.blue {
    background-color: blue;
}

.black {
    background-color: black;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

/* Bonusopdracht: omgekeerde volgorde */
.blue {
    order: 4;
}

.black {
    order: 3;
}

.red {
    order: 2;
}

.green {
    order: 1;
}

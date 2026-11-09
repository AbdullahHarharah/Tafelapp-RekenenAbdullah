let getal1 = 0;
let getal2 = 0;
let uitkomst = 0;

function nieuweVraag() {
    getal1 = Number(document.getElementById("oefenTafel").value);
    getal2 = Math.floor(Math.random() * 10) + 1;

    uitkomst = getal1 * getal2;

    document.getElementById("vraag").innerHTML =
        getal1 + " x " + getal2 + " = ?";
}

function controleer() {
    let antwoord = document.getElementById("antwoord").value;
    let resultaat = document.getElementById("resultaat");

    if (antwoord == uitkomst) {
        resultaat.innerHTML = "Goed! Dat is correct!";
        resultaat.style.color = "green";
    } else {
        resultaat.innerHTML = "Fout! Probeer opnieuw.";
        resultaat.style.color = "red";
    }
}
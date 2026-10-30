let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

function showTafel() {
    let tafel = tafelinputObj.value
    //let teller = 1;
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    // while (teller < 11) {
    //     uitkomst = teller * tafel;
    //     output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    //     teller++;
    // }
    tafeloutputObj.innerHTML = output;
}
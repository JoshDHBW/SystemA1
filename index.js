"use strict";

class Rechnung {
    constructor(umsatzsteuernummer, rechnungsdatum, anschrift, beschreibung, rechnungsbetrag, kundennummer) {
        this.umsatzsteuernummer = umsatzsteuernummer;
        this.kundennummer = kundennummer;
        this.rechnungsdatum = rechnungsdatum;
        this.anschrift = anschrift;
        this.beschreibung = beschreibung;
        this.rechnungsbetrag = rechnungsbetrag;
    }
}
window.addEventListener('load', function () {
        var button = document.getElementById("Erstellung");
        if(button==null){
            let jsonOutput = document.createElement("div");
            jsonOutput.innerText = "Button nicht initialisiert";
        }else {
            button.addEventListener("click", () => {

                //const request = require('request');

                var rechnungsDatum = document.getElementById("Rechnungsdatum").value;
                var anschrift = document.getElementById("Anschrift").value;
                var kundenNummer = document.getElementById("Kundennummer").value;
                var umsatzSteuerNummer = document.getElementById("Umsatzsteuernummer").value;
                var geldBetrag = document.getElementById("Geldbetrag").value;
                var beschreibung = document.getElementById("Beschreibung").value;

                var rechnung = new Rechnung(umsatzSteuerNummer, rechnungsDatum, anschrift, beschreibung, geldBetrag, kundenNummer);

                var rechnungJson = JSON.stringify(rechnung);

                //request.post('', rechnungJson);
                let jsonOutput = document.createElement("div");
                jsonOutput.innerText = rechnungJson.toString();
                document.getElementById("indexbody").appendChild(jsonOutput);
            });
        }
});



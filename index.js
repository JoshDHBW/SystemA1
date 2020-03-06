"use strict";

class Rechnung {
    constructor(umsatzsteuernummer, rechnungsdatum, anschrift, beschreibung, rechnungsbetrag, kundennummer,menge, umsatzsteuer,anrede,vorname,nachname,lieferdatum) {
        this.anrede=anrede;
        this.vorname=vorname;
        this.nachname=nachname;
        this.lieferdatum=lieferdatum;
        this.umsatzsteuernummer = umsatzsteuernummer;
        this.kundennummer = kundennummer;
        this.rechnungsdatum = rechnungsdatum;
        this.anschrift = anschrift;
        this.beschreibung = beschreibung;
        this.rechnungsbetrag = rechnungsbetrag;
        this.rechnungsnummer=Math.random()*100;
        this.menge=menge;
        this.gesamtpreis=this.menge*this.rechnungsbetrag;
        this.umsatzsteuer=umsatzsteuer;
        this.rechnungspreis=this.gesamtpreis*(1+(this.umsatzsteuer/100));
    }
}
window.addEventListener('load', function () {
        var button = document.getElementById("Erstellung");
            button.addEventListener("click", () => {

                //const request = require('request');

                var rechnungsDatum = document.getElementById("Rechnungsdatum").value;
                var anschrift = document.getElementById("Anschrift").value;
                var kundenNummer = document.getElementById("Kundennummer").value;
                var umsatzSteuerNummer = document.getElementById("Umsatzsteuernummer").value;
                var geldBetrag = document.getElementById("Geldbetrag").value;
                var beschreibung = document.getElementById("Beschreibung").value;
                var menge=document.getElementById("Menge").value;
                var umsatzsteuer=document.getElementById("Umsatzsteuer").value;
                var anrede=document.getElementById("Anrede").value;
                var vorname=document.getElementById("Vorname").value;
                var nachname=document.getElementById("Nachname").value;
                var lieferdatum=document.getElementById("Lieferdatum").value;

                var rechnung = new Rechnung(umsatzSteuerNummer, rechnungsDatum, anschrift, beschreibung, geldBetrag, kundenNummer, menge, umsatzsteuer,anrede,vorname,nachname,lieferdatum);

                var rechnungJson = JSON.stringify(rechnung);

                //request.post('', rechnungJson);
                let jsonOutput = document.createElement("div");
                jsonOutput.innerText = rechnungJson.toString();
                document.getElementById("indexbody").appendChild(jsonOutput);
            });
});



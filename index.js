"use strict";


var rechnungsDatum={"rechnungsdatum":document.getElementById("Rechnungsdatum").value};
var anschrift={"anschrift":document.getElementById("Anschrift").value};
var kundenNummer={"kundennummer":document.getElementById("Kundennummer").value};
var umsatzSteuerNummer={"umsatzsteuernummer":document.getElementById("Umsatzsteuernummer").value};
var geldBetrag={"geldbetrag":document.getElementById("Geldbetrag").value};
var beschreibung={"beschreibung":document.getElementById("Beschreibung").value};

var rechnung= new Rechnung(umsatzSteuerNummer,rechnungsDatum,anschrift,beschreibung,geldBetrag,kundenNummer);

var rechnungJson =JSON.stringify(rechnung);

const request=require('request');

request.post('',rechnungJson);


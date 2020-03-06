"use strict";


var rechnungsDatum=document.getElementById("Rechnungsdatum");
var anschrift=document.getElementById("Anschrift");
var kundenNummer=document.getElementById("Kundennummer");
var umsatzSteuerNummer=document.getElementById("Umsatzsteuernummer");
var geldBetrag=document.getElementById("Geldbetrag");
var beschreibung=document.getElementById("Beschreibung");

var rechnung= new Rechnung(umsatzSteuerNummer,rechnungsDatum,anschrift,beschreibung,geldBetrag,kundenNummer);

const request=require('request');

request.post('',rechnung);


"use strict";
class Rechnung {
    constructor(umsatzsteuernummer,rechnungsdatum,anschrift,beschreibung, rechnungsbetrag, kundennummer) {
        this._umsatzsteuernummer=umsatzsteuernummer;
        this._kundennummer=kundennummer;
        this._rechnungsdatum=rechnungsdatum;
        this._anschrift=anschrift;
        this._beschreibung=beschreibung;
        this._rechnungsbetrag=rechnungsbetrag;
    }
}
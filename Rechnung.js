"use strict";
class Rechnung {
    constructor(umsatzsteuernummer,rechnungsdatum,anschrift,rechnungspositionen, rechnungsbetrag) {
        this._umsatzsteuernummer=umsatzsteuernummer;
        this._rechnungsdatum=rechnungsdatum;
        this._anschrift=anschrift;
        this._rechnungspositionen=rechnungspositionen;
        this._rechnungsbetrag=rechnungsbetrag;
    }
}
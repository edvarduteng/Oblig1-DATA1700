function validerEpost(epost) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(epost);
}

function validerTelefon(telefonnr) {
    const re = /^[1-9]\d{7}$/;
    return re.test(telefonnr);
}

let billettArray = [];

function kjop() {
    let validTicket = true;
    let film = document.getElementById("filmOption").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    if (film === "-1") {
        validTicket = false;
        let filmError = document.getElementById("filmError");
        filmError.innerHTML = "Må velge en film";
        filmError.style.color = "red";

    } else {
        document.getElementById("filmError").innerHTML = "";
    }

    if (antall < 1 || antall === "" || antall % 1 !== 0) {
        validTicket = false;
        let antallError = document.getElementById("antallError");
        antallError.innerHTML = "Må velge et antall";
        antallError.style.color = "red";
    } else {
        document.getElementById("antallError").innerHTML = "";
    }

    if (fornavn === "") {
        validTicket = false;
        let fornavnError = document.getElementById("fornavnError");
        fornavnError.innerHTML = "Må skrive noe inn i fornavnet";
        fornavnError.style.color = "red";
    } else {
        document.getElementById("fornavnError").innerHTML = "";
    }

    if (etternavn === "") {
        validTicket = false;
        let etternavnError = document.getElementById("etternavnError");
        etternavnError.innerHTML = "Må skrive noe inn i etternavnet";
        etternavnError.style.color = "red";
    } else {
        document.getElementById("etternavnError").innerHTML = "";
    }


    if (telefonnr === "") {
        validTicket = false;
        let telefonnrError = document.getElementById("telefonnrError");
        telefonnrError.innerHTML = "Må skrive noe inn i telefonnr";
        telefonnrError.style.color = "red";
    } else if (!validerTelefon(telefonnr)) {
        validTicket = false;
        let telefonnrError = document.getElementById("telefonnrError");
        telefonnrError.innerHTML = "Må skrive et gyldig norsk telefonnr";
        telefonnrError.style.color = "red";
    } else {
        document.getElementById("telefonnrError").innerHTML = "";
    }

    if (epost === "") {
        validTicket = false;
        let epostError = document.getElementById("epostError");
        epostError.innerHTML = "Må skrive noe inn i epost";
        epostError.style.color = "red";
    } else if (!validerEpost(epost)) {
        validTicket = false;
        let epostError = document.getElementById("epostError");
        epostError.innerHTML = "Må skrive en gyldig e-post";
    } else {
        document.getElementById("epostError").innerHTML = "";
    }


    if (validTicket) {
        let billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        billettArray.push(billett);

        oppdaterTabell();
    }
    console.log(billettArray);
}

function oppdaterTabell() {
    let table = document.getElementById("tabell");

    table.innerHTML = "";

    let headerRow = table.insertRow();
    let headers = ["Fornavn", "Etternavn", "Telefonnr", "Epost", "Film", "Antall"];

    function opprettHeader(headerText) {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    }

    headers.forEach(opprettHeader);
    function prosesserBillett(billett) {
        let row = table.insertRow();
        let cellFornavn = row.insertCell(0);
        let cellEtternavn = row.insertCell(1);
        let cellTelefonnr = row.insertCell(2);
        let cellEpost = row.insertCell(3);
        let cellFilm = row.insertCell(4);
        let cellAntall = row.insertCell(5);

        cellFornavn.innerHTML = billett.fornavn;
        cellEtternavn.innerHTML = billett.etternavn;
        cellTelefonnr.innerHTML = billett.telefonnr;
        cellEpost.innerHTML = billett.epost;
        cellFilm.innerHTML = billett.film.charAt(0).toUpperCase() + billett.film.slice(1);
        cellAntall.innerHTML = billett.antall;
    }

    billettArray.forEach(prosesserBillett);
}

function slettArray() {
    billettArray = [];
    oppdaterTabell();
}






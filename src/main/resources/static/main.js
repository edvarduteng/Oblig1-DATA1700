let billettArray=[];

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
        document.getElementById("filmError").innerHTML = "Må velge en film";
    } else {
        document.getElementById("filmError").innerHTML = "";
    }

    if (antall < 1 || antall === "" || antall % 1 !== 0) {
        validTicket = false;
        document.getElementById("antallError").innerHTML = "Må velge et antall";
    } else {
        document.getElementById("antallError").innerHTML = "";
    }

    if (fornavn == "") {
        validTicket = false;
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
    } else {
        document.getElementById("fornavnError").innerHTML = "";
    }

    if (etternavn === "") {
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i etternavnet";
        validTicket = false;
    }
    else {
        document.getElementById("etternavnError").innerHTML = "";
    }


    if (telefonnr === "") {
        document.getElementById("telefonnrError").innerHTML = "Må skrive noe inn i telefonnr";
        validTicket = false;
    } else if (isNaN(telefonnr) || telefonnr < 10000000 || telefonnr > 99999999) {
        document.getElementById("telefonnrError").innerHTML = "Må skrive gyldig norsk telefonnr";
        validTicket = false;
    } else {
        document.getElementById("telefonnrError").innerHTML = "";
    }

    if (epost === "") {
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i epost";
        validTicket = false;
    }
    let epostValid = false;
    for (let i = 0; i < epost.length; i++) {
        if (epost[i] === "@") {
            epostValid = true;
        }
    }
    if (!epostValid) {
        document.getElementById("epostError").innerHTML = "Må skrive en gyldig epost";
        validTicket = false;
    } else {
        document.getElementById("epostError").innerHTML = "";
    }

    if (validTicket) {
        let billett = {film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr:telefonnr,
            epost: epost};
        billettArray.push(billett);
    }
    console.log(billettArray);

}
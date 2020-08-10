console.log("Szia! Ez egy konzol üzenet");

function kivalasztottFeltet() {
    let feltet;

    for (let i = 0; i < 5; i++) {
        feltet = document.getElementById("plusszFeltet" + i);
        if (feltet.checked == true) {
            return feltet.value;
        }
    }
}

function kivalasztottSzosz() {
    let szoszValaszt = document.getElementById("szosz");
    return szoszValaszt[szoszValaszt.selectedIndex].value;
}

function osszegSzamol() {
    let alapar = 1000;
    let fizetendoMegjelenit = document.querySelector("span.fizetendo");
    let mennyisegBemenet = document.querySelector("input[name='mennyiseg']");
    let feltet = kivalasztottFeltet();
    let szosz = kivalasztottSzosz();
    let osszeg = parseInt(mennyisegBemenet.value) * (alapar + parseInt(feltet) + parseInt(szosz));

    /* alert("Fizetendő: " + osszeg + "Ft"); */

    fizetendoMegjelenit.innerHTML = osszeg;
}

function szovegEllenoriz(ellenorizendo, hossz) {
    let vissza;
    let szoveg = document.getElementById(ellenorizendo);
    if (szoveg.value.trim().length > hossz) szoveg.value = szoveg.value.trim();
    else alert("A megadott adat nem megfelelő !");
}


function emailEllenoriz() {
    let mailforma = /^([A-z0-9\_\.\-]+)@([a-z0-9\_\-\.]+).([a-z]{2,})$/;
    
    let email = document.getElementById("email");
    if (email.value.match(mailforma)) {
        console.log("Nem megfelelő email cím");
    }
    else {
        alert("You have entered an invalid email address!");
    }
}

function telefonszamEllenoriz() {
    let telefonszam = Number(document.getElementById("telszam").value);
    if(isNaN(telefonszam)){
        alert("Nem megfelelő telefonszám!");
    }
    else{
        if(telefonszam.length < 10) alert("Nem megfelelő telefonszám!");
    }
}


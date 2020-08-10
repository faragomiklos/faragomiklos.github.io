console.log("Szia! Ez egy konzol üzenet");

function kivalasztottFeltet() {
    let feltet;

    for (let i = 0; i < 6; i++) {
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


function mennyisegEllenoriz(){
    let mennyisegBe = document.getElementById("mennyiseg");
    if(isNaN(parseInt(mennyisegBe.value))){ mennyisegBe.value = 0};

    if(parseInt(mennyisegBe.value) < 1){
        mennyisegBe.value = 0;
        alert("Legalább egy darabot kell rendelni!");
    } 
    else if (parseInt(mennyisegBe.value) > 10){
        mennyisegBe.value = 10;
        alert("Legfeljebb 10 darabot rendelhetsz egyszerre!");    
    }
    vegosszegFrissit();
}

function vegosszegFrissit(){
    let alapar = 1000;
    let fizetendoMegjelenit = document.querySelector("span.fizetendo");
    let mennyisegBemenet = document.getElementById("mennyiseg");
    let feltet = kivalasztottFeltet();
    let szosz = kivalasztottSzosz();
    let osszeg = parseInt(mennyisegBemenet.value) * (alapar + parseInt(feltet) + parseInt(szosz));


    fizetendoMegjelenit.innerHTML = osszeg;
    
}

function szovegEllenoriz(ellenorizendo, hossz) {
    let szovegforma = /(^[A-z]{3,})$/;
    szovegforma = szovegforma.source.replace('3',hossz);
    let szoveg = document.getElementById(ellenorizendo);
    szoveg.value = szoveg.value.trim();
    if(!szoveg.value.match(szovegforma))alert("A " +szoveg.title+ " nem megfelelő!");

    //if (szoveg.value.trim().length > hossz) szoveg.value = szoveg.value.trim();
    //else alert("A " +szoveg.title+ " nem megfelelő!");
}


function emailEllenoriz() {
    let mailforma = /^([A-z0-9\_\.\-]+)@([a-z0-9\_\-\.]+).([a-z]{2,})$/;
    
    let email = document.getElementById("email");
    if (!email.value.match(mailforma)) {
        alert("A megadott e-mail cím nem megfelelő!");
    }
}

function telefonszamEllenoriz(){
    let telefonSzam = document.getElementById("telszam");
    telefonSzam.value = telefonSzam.value.trim();
    if(telefonSzam.value.length < 10) alert("A telefonszám nem megfelelő");
}

function hszEllenoriz(){
    let hszBe = document.getElementById("hsz");

    if(isNaN(parseInt(hszBe.value))){ hszBe.value = 0}

    if(hszBe.value< 1) alert("A megadott házszám nem megfelelő!");
}


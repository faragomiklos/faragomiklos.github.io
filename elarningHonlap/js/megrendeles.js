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

function osszegSzamol() {
    let alapar = 1000;
    let mennyisegBemenet = document.querySelector("input[name='mennyiseg']");
    let feltet = kivalasztottFeltet();
    let osszeg = parseInt(mennyisegBemenet.value) * alapar + parseInt(feltet);
    alert("Fizetendő: " + osszeg + "Ft");
}


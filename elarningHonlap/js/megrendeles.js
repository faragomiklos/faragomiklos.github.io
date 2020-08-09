console.log("Szia! Ez egy konzol üzenet");


function kivalasztottFeltet(){

    plusszFeltetBemenet0 = document.getElementById("plusszFeltet0");
    plusszFeltetBemenet1 = document.getElementById("plusszFeltet1");
    plusszFeltetBemenet2 = document.getElementById("plusszFeltet2");
    plusszFeltetBemenet3 = document.getElementById("plusszFeltet3");
    plusszFeltetBemenet4 = document.getElementById("plusszFeltet4");
    plusszFeltetBemenet5 = document.getElementById("plusszFeltet5");

    if(plusszFeltetBemenet0.checked == true) return plusszFeltetBemenet0.value;
    else if(plusszFeltetBemenet1.checked == true) return plusszFeltetBemenet1.value;
    else if(plusszFeltetBemenet2.checked == true) return plusszFeltetBemenet2.value;
    else if(plusszFeltetBemenet3.checked == true) return plusszFeltetBemenet3.value;
    else if(plusszFeltetBemenet4.checked == true) return plusszFeltetBemenet4.value;
    else if(plusszFeltetBemenet5.checked == true) return plusszFeltetBemenet5.value;
    else return "hiba";

}

function kivalasztottFeltetUj(){

    let feltet;

    for(let i = 0; i < 5; i++){
        feltet = document.getElementById("plusszFeltet"+i);
        if(feltet.checked == true){
            return feltet.value;
        }
    }

}

function osszegSzamol(){
        let alapar = 1000;
        let mennyisegBemenet = document.querySelector("input[name='mennyiseg']");
        let feltet = kivalasztottFeltetUj();
        let osszeg = parseInt(mennyisegBemenet.value) * alapar + parseInt(feltet);
        alert("Fizetendő: " + osszeg + "Ft");
}
let sor= [0.12,5,10,15,20,25,30];

function napKivalaszt(){
    let kivalasztottNap = document.getElementById("nap");
    let napiHom = document.getElementById("napiHomerseklet");
    let napSzam = kivalasztottNap[kivalasztottNap.selectedIndex].value;
    napiHom.innerHTML = sor[napSzam];
}
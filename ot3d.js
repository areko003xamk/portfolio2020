//Ohjelma lukee json-tiedoston palvelimelta ja tulostaa sen html-taulukkoon.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin ohjelma suoritetaan.
$("#tulosta").click(function(){//Käyttäjän klikkaus suorittaa ohjelman.
$.ajax({url: "elokuvat.json",//Haetaan tiedosto palvelimelta.
success: function(movies){//Haun onnistuessa kopioidaan result-muuttujaan.
tulostaFilmit(movies);//Lähetään palvelimelta saatu tieto parsittavaksi.
}
});
});
});
function tulostaFilmit(movies){
var tulostus = "<table border='0'>";//Tulostetaan html-taulukkoon.
for(i = 0; i < movies.length; i++){//Käydään tiedoston kaikki rivit läpi.
tulostus += "<tr><td>" + movies[i].numero + "</td><td>" + movies[i].elokuva + "</td><td>" + movies[i].vuosi + "</td><td>" + movies[i].kategoria + "</td><td>" + movies[i].ohjaaja + "</td></tr>";
}
tulostus += "</table>";//Lopetetaan taulukko
$("#paikka").html(tulostus);//Tulostetaan html-sivulle.
};
//Ohjelma käy läpi taulukon rivit ja tarkistaa sopiiko teksti hakuun.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin ohjelma suoritetaan.
$("#filmihaku").on("keyup", function(){
var arvo = $(this).val().toLowerCase();//Lukee syötteen arvo nimiseen muuttujaan.
$("#paikka tr").filter(function(){
$(this).toggle($(this).text().toLowerCase().indexOf(arvo) > -1)//Toggle() piilottaa rivit, jotka eivät sovi hakuun.
//toLowerCase() muuttaa tekstin pienaakkosiksi.
});
});
});

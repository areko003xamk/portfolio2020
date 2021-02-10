//Ohjelma lukee json-tiedoston palvelimelta ja tulostaa sen html-taulukkoon.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin ohjelma suoritetaan.
$("#tulosta").click(function(){//Käyttäjän klikkaus suorittaa ohjelman.
$.ajax({url: "tuotteet.json",//haetaan tiedosto palvelimelta.
success: function(result){//Haun onnistuessa kopioidaan result-muuttujaan.
tulostaTuotteet(result);//Lähetään palvelimelta saatu tieto parsittavaksi.
}
});
});
});
//Muotoillaan json-tiedosto lukukelpoisemmaksi.
function tulostaTuotteet(result){
var tulostus = "<table border='1'>";//Tulostetaan html-taulukkoon.
for(i = 0; i < result.length; i++){//Käydään tiedoston kaikki rivit läpi.
tulostus += "<tr><td>" + result[i].tuote + "</td><td>" + result[i].hinta + "</td></tr>";
}
tulostus += "</table>";//Lopetetaan taulukko
$("#paikka").html(tulostus);//Tulostetaan html-sivulle.
};

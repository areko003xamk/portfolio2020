//Ohjelma lukee json-tiedoston palvelimelta ja lähettää sen hakufunktiolle.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin ohjelma suoritetaan.
$("#painike").click(function(){//Käyttäjän klikkaus suorittaa ohjelman.
$.ajax({url: "tuotteet.json",//haetaan tiedosto palvelimelta.
success: function(result){//Haun onnistuessa kopioidaan result-muuttujaan.
tulostaHinta(result);//Lähetään tiedosto hakuohjelmalle.
}
});
});
});
//Etsii luettelosta syötetyn tuotteen nimen ja tulostaa sen hinnan.
function tulostaHinta(result){
var hakutulos = $("#tuote").val();//Luetaan syöte.
for(var i = 0; i < result.length; i++){//Käydään läpi taulukon rivit.
if(hakutulos == result[i].tuote){//Ehdon täyttyessä tulostaa osuman hinnan.
$("#hinta").html(result[i].hinta);
}
}
}